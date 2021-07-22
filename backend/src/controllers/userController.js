const User = require("../models/userModel");
const Bcrypt = require("bcryptjs");
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

module.exports = userCtrl;
