const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const registerFunction = async (req, res) => {
  // Validate the input

  const { firstName, lastName, address, mobileNumber, email, password } =
    req.body;

    // simple validation
  if (
    !firstName ||
    !lastName ||
    !address ||
    !mobileNumber ||
    !email ||
    !password
  ) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  // Check if the email already exists
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "Email already registered" });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // Create a new user
  const newUser = new User({
    firstName,
    lastName,
    address,
    mobileNumber,
    email,
    password: hash,
  });

  // Save the user to the database
  await newUser.save();

  // Send a response
  res.status(201).json({ message: "User registered successfully" });
};

module.exports = { registerFunction };
