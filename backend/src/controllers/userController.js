const User = require("../models/userModel");
const Bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userCtrl = {};

userCtrl.listUser = async (req, res, next) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.saveUser = async (req, res, next) => {
  req.body.password = Bcrypt.hashSync(req.body.password, 10);
  const user = new User(req.body);
  await user.save();
  res.json({ status: "Usuario creado." });
};

userCtrl.searchUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json(user);
};

userCtrl.updateUser = async (req, res, next) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "Usuario actualizado." });
};

userCtrl.deleteUser = async (req, res, next) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ status: "Usuario borrado." });
};

userCtrl.logIn = async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.json({ status: "Usuario no existe" });
  }
  if (!Bcrypt.compareSync(req.body.password, user.password)) {
    return res.json({ status: "La contraseña es incorrecta" });
  }
  const token = jwt.sign({ email: user.email, userID: user._id }, "secret", {
    expiresIn: "1h",
  });
  res.json({ token: token, expiresIn: 3600, userId: user._id });
};

module.exports = userCtrl;
