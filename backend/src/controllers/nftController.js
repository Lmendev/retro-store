const Nft = require("../models/nftModel");

const nftCtrl = {};

nftCtrl.listNft = async (req, res, next) => {
  try {
    const nfts = await Nft.find(req.query);
    res.json(nfts);
  } catch (err) {
    res.status(500).send(err);
  }
};

nftCtrl.saveNft = async (req, res, next) => {
  try {
    const {title, description, token, type, price, onSale, owner} = req.body
    const image = req.protocol + "://" + req.get("host") + "/files/" + req.file.filename

    const nft = new Nft({
      title,
      description,
      image,
      token,
      type,
      price,
      onSale,
      owner
    });

    savedNft = await nft.save();
    res.json(savedNft);
  } catch (err) {
    console.log(err)
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
      owner: req.body.owner,
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
