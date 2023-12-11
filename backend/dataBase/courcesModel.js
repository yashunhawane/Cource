import mongoose from "mongoose";

const courcesSchema = new mongoose.Schema({}, { timestamps: true });

export const Cource = mongoose.model("Cource", courcesSchema);
