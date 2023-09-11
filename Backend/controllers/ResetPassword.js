const User=require('../models/User');
const mailSender=require("./mailSender");
const bcrypt=require('bcrypt');
const crypto = require("crypto");

//resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
  try{
    //Get email from request body
    const {email}=req.body;

    //Email validations
    if (!email) {
      return res.status(400).json({
        success:false,
        message:"Email is required!"
      })
    }
    const user=await User.findOne({email:email});
    if(!user){
      return res.status(400).json({
        success:false,
        message:"User with this email does not exist!"
      })
    }

    //Generating token
    const token= crypto.randomUUID();

    //Updating user by adding token and expiry time
    const updateDetails=await User.findOneAndUpdate(
      {
        email:email
      },
      {
        token:token,
        resetPasswordExpires:Date.now() + 5*60*1000
      },
      {  
        //This gives updated document in the url, 
        //if avoided then previous data may be shown
        new:true,
      }
    );

    //creating url
    const url=`http://localhost:3000/reset-password/${token}`;

    //Sending mail containing url
    await mailSender(
			email,
			"Password Reset",
			`Your Link for email verification is ${url}. Please click this url to reset your password.`
		);

    //returning response
    return res.status(200).json({
      success:true,
      message:"check your mail to reset it",
    });
  } catch(err){
    console.log(err);
    return res.status(500).json({
      success:false,
      message:"Some thing went wrong while reseting password token"
    });
  }
}

exports.resetPassword = async (req, res) => {
  try{
    //Fetch data
    const {password, token} = req.body;

    //Get user details from Database using token
    const userDetail=await User.findOne({token:token});

    //Token validation
    if(!userDetail){
      return res.status(400).json({
        success:false,
        message:"Invalid token"
      });
    }
    if(!(userDetail.resetPasswordExpires > Date.now())){
      return res.status(400).json({
        success:false,
        message:"Token expired"
      });
    }

    //Password hashing
    const hashedPassword= await bcrypt.hash(password, 10);

    //Updating password
    await User.findOneAndUpdate(
      {token:token},
      {password:hashedPassword},
      {new:true}
    )

    //return response
    return res.status(200).json({
      success:true,
      message:"Password updated successfully"
    });
  } catch(err){
    console.log(err);
    return res.status(500).json({
      success:false,
      message:"Some thing went wrong while reseting password"
    });
  }
}