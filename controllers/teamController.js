import Team from "../models/team.js";
import Competition from "../models/competition.js";

export const addTeam = async (req, res, next) => {
  const { competitionName, competitionDate } = req.body;
  const team = new Team({
    team:req.body.team,
    competitionDate:req.body.competitionDate,
    competitionName:req.body.competitionName,
    competitionWebsite:req.body.competitionWebsite,
    membersName:req.body.membersName,
    membersNum:req.body.membersNum,
    skills:req.body.skills,
    projectIdea:req.body.projectIdea,
    objective:req.body.objective,
    googleId:req.body.googleId,
  });
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
