import Team from "../models/team.js";
import Competition from "../models/competition.js";

export const addTeam = async (req, res, next) => {
  const { competitionName, competitionDate } = req.body;
  const team = new Team(req.body);
  try {
    await team.save();
    const competition = await Competition.findOne({ name: competitionName });
    if (competition) {
      competition.teams.push(team._id);
      await competition.save();
    } else {
      const newCompetition = new Competition({
        name: competitionName,
        teams: [team._id],
        date: competitionDate,
      });
      await newCompetition.save();
    }
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).send(team);
};

export const addRequests = async (req, res, next) => {
  const { teamId, name } = req.query;
  let team;
  try {
    team = Team.findById(teamId);
  } catch (err) {
    return console.log(err);
  }
  if (!team) {
    return res.status(422).json({ message: "No team found" });
  }
  team.requests.push(name);
  try {
    await team.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ message: "Request added" });
};
