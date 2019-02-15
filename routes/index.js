const express = require('express');

const ctrl = require('./../controllers');

const router = express.Router();

router.post('/send', ctrl.send.sendMail);
router.get('/send', ctrl.get.getMail);

module.exports = router;
