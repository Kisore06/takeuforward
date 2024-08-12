const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/bannerController')


router.post(`/banner`, bannerController.post_banner);
router.get(`/banner`, bannerController.banner);


module.exports = router;