const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginFunction = async (req, res) => {
  console.log(req.body);
  // Validate the input
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  // Check if the email exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Check if the password matches
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Generate a token
  const payload = { id: user._id, name: user.name, email: user.email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  // Send a response
  res
    .status(200)
    .json({ message: "User logged in successfully", id: user._id, token });
};

module.exports = { loginFunction };
