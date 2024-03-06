const { default: mongoose } = require("mongoose");
const User = require("../models/users.model");

const getUserFunction = async (req, res, next) => {
  try {
    // Get the id 
    const {id} = req.body;

    // Validate the id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      // Send  error message
      return res.status(400).json({ message: "Invalid user id" });
    }
    //find user
    const user = await User.findById(id);

    // send user EZ
    res.status(200).send(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserFunction };
