import mongoose from "mongoose";
import validator from "validator";

const memorySchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
    trim: true,
  },

  imgLink: {
    type: String,
    required: false,
  },

  lat: {
    type: String,
    required: true,
    trim: true,
  },

  lng: {
    type: String,
    required: true,
    trim: true,
  },

  creatorName: {
    type: String,
    required: true,
    trim: true,
  },

  creatorImg: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("Memory", memorySchema);
