import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  profilePicLink: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  idLink: {
    type: String,
  },
  resumeLink: {
    type: String,
  },
  competingExp: {
    type: String,
  },
  societyExp: {
    type: String,
  },
  additionalLinks: {
    type: String,
  },
  branch: {
    type: String,
  },
  rollNo: {
    type: String,
  },
  googleId: {
    type: String,
  },
});

export default mongoose.model("User", userSchema);
