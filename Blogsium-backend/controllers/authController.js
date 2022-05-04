import User from "../models/User.js";
import bcrypt from "bcrypt";
// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (user) {
//     return res.status(400).send({ error: "User already exists" });
//   }
//   if (!name || !email || !password) {
//     return res.status(400).send({ error: "Please provide all values" });
//   }
//   try {
//     const newUser = await User.create({ name, email, password });
//     return res.status(201).send({ user: newUser });
//   } catch (err) {
//     return res.status(500).send({ error: "Internal server error" });
//   }
// };

const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(11);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  newUser.save((err, createdUser) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    createdUser.password = undefined;
    res.json(createdUser);
  });
};

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).send({ error: "Provide all values" });
//   }
//   const user = await User.findOne({ email }).select("+password");
//   if (!user) {
//     return res.status(400).send({ error: "Inavlid credentials" });
//   }
//   const isPasswordCorrect = await user.comparePassword(password);
//   if (!isPasswordCorrect) {
//     return res.status(401).send({ error: "Inavlid credentials" });
//   }
//   // const token = user.createJWT();
//   user.password = undefined;
//   // res.status(201).json({ user, token });
//   res.status(201).json({ user });
// };

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, returnedUser) => {
    if (err || !returnedUser) {
      return res.status(400).json({
        error: "Wrong credentials",
      });
    }
    bcrypt
      .compare(password, returnedUser.password)
      .then((result) => {
        if (!result) {
          return res.status(400).json({
            error: "Wrong credentails",
          });
        }
        returnedUser.password = undefined;
        return res.status(200).json(returnedUser);
      })
      .catch((err) => {
        return res.status(400).json({
          error: err,
        });
      });
  });
};

// const loginUser = async (req, res) => {
//   const { name, password } = req.body;
//   if (!name || !password) {
//     return res.status(400).send({ error: "Provide all values" });
//   }
//   const user = await User.findOne({ name }).select("+password");
//   if (!user) {
//     return res.status(400).send({ error: "Inavlid credentials" });
//   }
//   const isPasswordCorrect = await user.comparePassword(password);
//   if (!isPasswordCorrect) {
//     return res.status(401).send({ error: "Inavlid credentials" });
//   }
//   const token = user.createJWT();
//   user.password = undefined;
//   res.status(201).json({ user, token });
// };
export { registerUser, loginUser };
