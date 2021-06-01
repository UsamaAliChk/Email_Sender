const sendEmail=require('../Modal/SendEmail');
exports.transferData=async(req,res)=>{
    const data=sendEmail(req.body);
}