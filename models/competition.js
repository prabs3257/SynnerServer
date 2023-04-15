import mongoose from "mongoose";

const competitionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  teams: {
    type: [
      {
        type: String,
      },
    ],
  },
});

export default mongoose.model("Competition", competitionSchema);
