const User = require("../models/userModel");
var mongoose = require("../conexDb/conn");

function saveUser(req, res) {
  var myUser = new User(req.body);

  myUser.save((err, result) => {
    res.status(200).send({ message: result });
  });
}

function searchUser(req, res) {
  var idUser = req.params.id;
  User.findById(idUser).exec((err, result) => {
    if (err) {
      res.status(500).send({ message: "Error al ejecutar solicitud" });
    } else {
      if (!result) {
        res
          .status(404)
          .send({ message: "El registro no se encuentra disponible" });
      } else {
        res.status(200).send({ result });
      }
    }
  });
}

function listUser(req, res) {
  var idUser = req.params.id;
  if (!idUser) {
    var result = User.find({}).sort("title");
  }
  result.exec(function (err, result) {
    if (err) {
      res.status(500).send({ message: "Error al ejecutar la solicitud" });
    } else {
      if (!result) {
        res
          .status(400)
          .send({ message: "El resgistro no se encuestra disponible" });
      } else {
        res.status(200).send({ result });
      }
    }
  });
}

function deleteUser(req, res) {
  var idUser = req.params.id;
  User.findByIdAndRemove(idUser, function (err, user) {
    if (err) {
      return res.json(500, { message: "No hemos encontrado usuario" });
    }
    return res.json(user);
  });
}

function updateUser(req, res) {
  var id = req.params.id;
  User.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true },
    function (err, User) {
      if (err) res.send(err);
      res.json(User);
    }
  );
}

module.exports = {
  saveUser,
  searchUser,
  listUser,
  deleteUser,
  updateUser,
};
