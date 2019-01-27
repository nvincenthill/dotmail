const express = require('express');

const ctrl = require('./../controllers');

const router = express.Router();

router.get('/exampleData', ctrl.example.get);

module.exports = router;
