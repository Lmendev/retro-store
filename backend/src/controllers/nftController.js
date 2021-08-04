const Nft = require("../models/nftModel");
const nftCtrl = {};

nftCtrl.listNft = async (req, res, next) => {
  try {
    const nfts = await Nft.find();
    res.json(nfts);
  } catch (err) {
    res.status(500).send(err);
  }
};

nftCtrl.saveNft = async (req, res, next) => {
  try {
    const url = req.protocol + "://" + req.get("host");
    const nft = new Nft({
      title: req.body.title,
      description: req.body.description,
      image: url + "/files/" + req.file.filename,
      token: req.body.token,
      type: req.body.type,
      price: req.body.price,
      onSale: req.body.onSale,
    });

    savedNft = await nft.save();
    res.json(savedNft);
  } catch (err) {
    res.status(500).send(err);
  }
};

nftCtrl.searchNft = async (req, res, next) => {
  try {
    const { id } = req.params;
    const nft = await Nft.findById(id);
    res.json(nft);
  } catch (err) {
    res.status(500).send(err);
  }
};

nftCtrl.updateNft = async (req, res, next) => {
  try {
    let image = "";
    if (req.file) {
      const url = req.protocol + "://" + req.get("host");
      image = url + "/files/" + req.file.filename;
    } else {
      image = req.body.image;
    }

    const nft = new Nft({
      _id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      image: image,
      token: req.body.token,
      type: req.body.type,
      price: req.body.price,
      onSale: req.body.onSale,
    });

    updatedNft = await Nft.updateOne({ _id: req.params.id }, nft);
    res.json(nft);
  } catch (err) {
    res.status(500).send(err);
  }
};

nftCtrl.deleteNft = async (req, res, next) => {
  try {
    await Nft.findByIdAndRemove(req.params.id);
    res.json({ status: "NFT borrado." });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = nftCtrl;
