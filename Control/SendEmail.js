const sendEmail=require('../Modal/SendEmail');
exports.transferData=async(req,res,next)=>{
    const data=sendEmail(req.body);

    return res.send("Hello")
}