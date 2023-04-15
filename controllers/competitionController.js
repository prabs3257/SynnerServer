import Competition from "../models/competition.js";

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
  const { id } = req.query;
  let competition;
  try {
    competition = await Competition.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!competition) {
    return res.status(422).json({ message: "No competition found" });
  }
  const { teams } = competition;
  return res.status(200).json(teams);
};
