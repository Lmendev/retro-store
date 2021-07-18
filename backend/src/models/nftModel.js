var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var nftSchema = Schema(
  {
    title: String,
    description: String,
    image: String,
    token: String,
    type: String,
  },
  { timestamps: true, versionKey: false }
);

const Nft = mongoose.model("nft", nftSchema);
module.exports = Nft;
