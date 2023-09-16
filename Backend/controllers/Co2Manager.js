const Co2Data = require("../models/Co2Data");
const User = require("../models/User");

exports.Co2Manager = async (req, res) => {
  try{
    const { emittedCO2, date } = req.body;
    const userId = req.user.id;
    if(!emittedCO2 || !date || !userId){
      return res.status(400).json({
        success: false,
        message : "Please enter all the fields"
      })
    }
    const exist = await Co2Data.findOne({emittedOn:date, emittedBy:userId})
    if(exist){
      const newData = await Co2Data.findOneAndUpdate({emittedOn:date, emittedBy:userId },
        { amount: emittedCO2 },
        { new: true } )
      return res.status(201).json({
        success: true,
        message: "CO2 data updated successfully",
        data: newData,
      });
    }
    const newData = await Co2Data.create({
      amount:emittedCO2 ,
      emittedOn:date,
      emittedBy:userId
    })
    const details = await User.findByIdAndUpdate(userId, { $push: { co2Data: newData._id } }).populate("co2Data").exec();
    res.status(201).json({
      success: true,
      message: "CO2 data added successfully",
      data: details,
    });
  } catch(err){
    res.status(500).json({
      success: false,
      message: "An error occurred while Managing C02",
      error: err.message,
    });
  }
}

exports.fetchTotalCo2Emitted = async (req, res) => {
  try{
    const userId = req.user.id;
    if(!userId){
      return res.status(400).json({
        success: false,
        message : "Please login first"
      })
    }
    const data = await Co2Data.find({emittedBy:userId}, {amount:true, emittedOn:true, emittedBy:true})
    var totalAmount = 0;
    for(var i=0; i<data.length; i++){
      totalAmount += (data[i].amount);
    }
    return res.status(200).json({
      success:true,
      totalAmount
    })
  } catch(err){
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching C02 emitted",
      error: err.message,
    });
  }
}

exports.resetEmission = async (req, res) => {
  try{
    const userId = req.user.id;
    if(!userId){
      return res.status(400).json({
        success: false,
        message : "Please login first"
      })
    }
    const userDetails = await User.findById(userId).populate("co2Data").exec();
    userDetails.co2Data = [];
    userDetails.save();
    const co2Array = await Co2Data.find({emittedBy:userId}, {amount:true, emittedOn:true, emittedBy:true})
    for(var i=0; i<co2Array.length; i++){
      co2Array[i].emittedBy = null;
      co2Array[i].save()
      co2Array[i].deleteOne();
    }
  } catch(err){
    return res.status(500).json({
      success: false,
      message: "An error occurred while resetting C02 emission",
      error: err.message,
    });
  }
}