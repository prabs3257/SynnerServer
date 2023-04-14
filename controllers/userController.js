import User from "../models/user.js";
import tesseract from "tesseract.js";

export const addUser = async (req, res, next) => {
  console.log(req.body);
  const user = new User(req.body);

  try {
    const temp = await User.findOne({ email: req.body.email });
    if (!temp) {
      await user.save();
    }
    //const token = await user.generateAuthToken()
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const addProfile = async (req, res, next) => {
  const {
    idLink,
    resumeLink,
    competingExp,
    societyExp,
    additionalLinks,
    email,
    googleId,
    name,
    profilePicLink,
  } = req.body;

  console.log(req.body);
  let exisitingUser;
  try {
    exisitingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (!exisitingUser) {
    return res.status(422).json({ message: "User does not exists" });
  }

  const result = await tesseract.recognize(idLink, "eng");
  const userInfo = result.data.text.split("\n");
  const rollNo = userInfo[5];
  const branch = userInfo[6];

  const user = await User.findOneAndUpdate(
    { email },
    {
      idLink,
      resumeLink,
      competingExp,
      societyExp,
      additionalLinks,
      googleId,
      name,
      profilePicLink,
      branch,
      rollNo,
    }
  );

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }

  return res.status(201).json({ user });
};

export const getUser = async (req, res, next) => {
  const { googleId } = req.query;
  let exisitingUser;
  try {
    exisitingUser = await User.findOne({ googleId });
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json(exisitingUser);
};
