const express = require('express');

const ctrl = require('./../controllers');

const router = express.Router();

router.post('/send', ctrl.send.sendMail);
router.post('/preview', ctrl.preview.previewEmail);
router.get('/send', ctrl.get.getMail);

module.exports = router;
