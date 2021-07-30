const Nft = require("../models/nftModel");
const nftCtrl = {};

nftCtrl.listNft = async (req, res, next) => {
  const nfts = await Nft.find();
  res.json(nfts);
};

nftCtrl.saveNft = async (req, res, next) => {
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
};

nftCtrl.searchNft = async (req, res, next) => {
  const { id } = req.params;
  const nft = await Nft.findById(id);
  res.json(nft);
};

nftCtrl.updateNft = async (req, res, next) => {
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
};

nftCtrl.deleteNft = async (req, res, next) => {
  await Nft.findByIdAndRemove(req.params.id);
  res.json({ status: "NFT borrado." });
};

module.exports = nftCtrl;
