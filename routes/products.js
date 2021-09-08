var express = require('express');
const fs=require('fs');
var router = express.Router();

const {detail}=require('../controllers/productsController');
/* /product/ detail*/

router.get('/detail/:id',detail);

module.exports = router;
