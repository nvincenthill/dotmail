const express = require('express');

const ctrl = require('./../controllers');

const router = express.Router();

router.post('/send', ctrl.send.sendMail);

module.exports = router;
