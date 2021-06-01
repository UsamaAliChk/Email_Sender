const express=require('express');

const router=express.Router();


router.route('/:data').get(cityDetail);


module.exports = router;