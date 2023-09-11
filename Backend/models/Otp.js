const mongoose=require("mongoose");
const mailSender = require("../controllers/mailSender");
const emailTemplate = require("../template/emailVerification");

const otpSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  otp:{
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    default:Date.now(),
    expires:5*60
  }
});

//Function to send OTP on email-->
async function sendVerificationEmail(email, otp){
  try{
    const mailResponse=await mailSender(email, "Verification email from Pizza Delivery App", emailTemplate(otp));
    console.log("Email sent successfully!", mailResponse)
  } catch(err){
    console.log("Error while sending mail OTP!");
    console.log(err);
    throw err;
  }
}

otpSchema.pre("save", async function(next){
  // Only send an email when a new document is created
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }  
  next();
})

module.exports=mongoose.model("OTP", otpSchema)