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
