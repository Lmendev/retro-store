const Nft = require("../models/nftModel");
const nftCtrl = {};

nftCtrl.listNft = async (req, res, next) => {
  const nfts = await Nft.find();
  res.json(nfts);
};

nftCtrl.saveNft = async (req, res, next) => {
  const nft = new Nft(req.body);
  await nft.save();
  res.json({ status: "NFT creado." });
};

nftCtrl.searchNft = async (req, res, next) => {
  const { id } = req.params;
  const nft = await Nft.findById(id);
  res.json(nft);
};

nftCtrl.updateNft = async (req, res, next) => {
  const { id } = req.params;
  await Nft.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "NFT actualizado." });
};

nftCtrl.deleteNft = async (req, res, next) => {
  await Nft.findByIdAndRemove(req.params.id);
  res.json({ status: "NFT borrado." });
};

module.exports = nftCtrl;
