import Competition from "../models/competition.js";
import Team from "../models/team.js";

export const getAllCompetitions = async (req, res, next) => {
  let competitions;
  try {
    competitions = await Competition.find();
  } catch (err) {
    return console.log(err);
  }
  if (!competitions) {
    return res.status(422).json({ message: "No competitions found" });
  }
  return res.status(200).json(competitions);
};

export const getTeamsFromCompetition = async (req, res, next) => {
  const { _id } = req.query;
  let competition;
  try {
    competition = await Competition.findById(_id);
  } catch (err) {
    return console.log(err);
  }
  if (!competition) {
    return res.status(422).json({ message: "No competition found" });
  }
  const { teams } = competition;
  let teamsArray = [];
  for (let i = 0; i < teams.length; i++) {
    let team;
    try {
      team = await Team.findById(teams[i]);
    } catch (err) {
      return console.log(err);
    }

    if (!team) {
      return res.status(422).json({ message: "No team found" });
    } else {
      teamsArray.push(team);
    }
  }
  return res.status(200).json(teamsArray);
};
