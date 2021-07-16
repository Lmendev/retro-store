const Nft = require("../models/nftModel");
var mongoose = require("../conexDb/conn");

function saveNft(req, res) {
  var myNft = new Nft(req.body);

  myNft.save((err, result) => {
    res.status(200).send({ message: result });
  });
}

module.exports = {
  saveNft,
};
