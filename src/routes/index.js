const express = require('express');

const loginRoute = express.Router();
const { login } = require('../controllers');

loginRoute.post('/', login);

module.exports = { loginRoute };