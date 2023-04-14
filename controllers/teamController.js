import Team from "../models/team.js";

export const addTeam = async (req, res, next) => {
  const team = new Team(req.body);
  try {
    await team.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).send(team);
};
