const User = require("../models/userModel");
const Bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userCtrl = {};

userCtrl.listUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

userCtrl.saveUser = async (req, res, next) => {
  try {
    req.body.password = Bcrypt.hashSync(req.body.password, 10);
    const user = new User(req.body);
    await user.save();
    res.json({ status: "Usuario creado." });
  } catch (err) {
    res.status(500).send(err);
  }
};

userCtrl.searchUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

userCtrl.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "Usuario actualizado." });
  } catch (err) {
    res.status(500).send(err);
  }
};

userCtrl.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: "Usuario borrado." });
  } catch (err) {
    res.status(500).send(err);
  }
};

userCtrl.logIn = async (req, res, next) => {
  try {
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
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = userCtrl;
