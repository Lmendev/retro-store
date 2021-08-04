const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const Float = require("mongoose-float").loadType(mongoose);

const nftSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Float,
      required: true,
    },
    onSale: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("nft", nftSchema);
