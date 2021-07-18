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

function listNft(req, res) {
  var idNft = req.params.id;
  if (!idNft) {
    var result = Nft.find({}).sort("title");
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

function deleteNft(req, res) {
  var idNft = req.params.id;
  Nft.findByIdAndRemove(idNft, function (err, nft) {
    if (err) {
      return res.json(500, { message: "No hemos encontrado NFT" });
    }
    return res.json(nft);
  });
}

function updateNft(req, res) {
  var id = req.params.id;
  Nft.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true },
    function (err, Nft) {
      if (err) res.send(err);
      res.json(Nft);
    }
  );
}

module.exports = {
  saveNft,
  searchNft,
  listNft,
  deleteNft,
  updateNft,
};
