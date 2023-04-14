import User from "../models/user.js";

export const getUser = async (req, res, next) => {
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
