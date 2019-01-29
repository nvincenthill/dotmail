const express = require('express');

const ctrl = require('./../controllers');

const router = express.Router();

router.post('/send', ctrl.send.post);

module.exports = router;
