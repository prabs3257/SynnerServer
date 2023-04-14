import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  competitionName: {
    type: String,
    required: true,
  },

  competitionWebsite: {
    type: String,
  },

  membersNum: {
    type: String,
    required: true,
  },

  competitionDate: {
    type: String,
    required: true,
  },
  membersName: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  projectIdea: {
    type: String,
    required: true,
  },
  objective: {
    type: String,
  },
  googleId: {
    type: String,
  },
});

export default mongoose.model("Team", teamSchema);
