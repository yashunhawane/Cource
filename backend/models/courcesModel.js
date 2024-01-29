/* eslint-disable no-undef */
const mongoose = require("mongoose");

const courcesSchema = new mongoose.Schema(
  {
    courceTitle: {
      type: String,
      required: true,
    },
    courceDescription: {
      type: String,
      required: true,
    },
    courcePrice: {
      type: Number,
      required: true,
    },
    courceId: {
      type: mongoose.Schema.Types.ObjectId,

      index: true,
    },
    courceImageUrl: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
   
  },
  { timestamps: true }
);

const Cource = mongoose.model("Cource", courcesSchema);

module.exports = Cource;
