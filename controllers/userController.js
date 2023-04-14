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
  } = req.body;

  let exisitingUser;
  try {
    exisitingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (!exisitingUser) {
    return res.status(422).json({ message: "User does not exists" });
  }

  console.log(exisitingUser);

  const result = await tesseract.recognize(
    "https://firebasestorage.googleapis.com/v0/b/look-up-f467b.appspot.com/o/Screenshot%202023-04-14%20at%204.59.50%20PM.png?alt=media&token=bddb1f08-8b0d-43bf-ba40-80cfdc4f6aba",
    "eng"
  );
  const userInfo = result.data.text.split("\n");
  const rollNo = userInfo[5];
  const branch = userInfo[6];

  console.log(email);

  const user = await User.findOneAndUpdate(
    { email: exisitingUser.email },
    {
      idLink,
      resumeLink,
      competingExp,
      societyExp,
      additionalLinks,
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
