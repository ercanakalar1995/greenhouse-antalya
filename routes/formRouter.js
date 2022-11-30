const express = require('express');
const formController = require('../controllers/formController.js');

const formRouter = express.Router();

formRouter.post('/createForm', formController.createForm);

module.exports = formRouter;
