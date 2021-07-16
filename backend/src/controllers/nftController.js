const Nft = require("../models/nftModel");
var mongoose = require("../conexDb/conn");

function saveNft(req, res) {
  var myNft = new Nft(req.body);

  myNft.save((err, result) => {
    res.status(200).send({ message: result });
  });
}

function searchNft(req, res) {
  var idNft = req.params.id;
  Nft.findById(idNft).exec((err, result) => {
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

module.exports = {
  saveNft,
  searchNft,
};
