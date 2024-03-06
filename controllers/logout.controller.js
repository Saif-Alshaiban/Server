const { default: mongoose } = require("mongoose");
const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const logoutFunction = async (req,res,next) => {

    const token = req.body.token
    res.status(201).send(token)

}

module.exports = logoutFunction;