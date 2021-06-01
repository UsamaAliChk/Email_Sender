const express=require('express');

const router=express.Router();

const transferData=require('../Control/SendEmail');

router.route('').post(transferData);


module.exports = router;