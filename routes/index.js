const express = require('express');

const ctrl = require('./../controllers');

const router = express.Router();

router.get('/exampleData', ctrl.example.get);
router.post('/send', ctrl.emailer.post);

module.exports = router;
