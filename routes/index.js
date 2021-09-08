var express = require('express');
const fs=require('fs');
var router = express.Router();

const {index}=require('../controllers/indexController');
/* GET home page. */
router.get('/',index);


module.exports = router;
