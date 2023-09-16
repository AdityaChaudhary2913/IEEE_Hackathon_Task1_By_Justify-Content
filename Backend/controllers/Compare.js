const Co2Data = require("../models/Co2Data");
const User = require("../models/User");


exports.everyDayCo2Report = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Please login first",
      });
    }
    const monthlyReport = await Co2Data.find({emittedBy:userId}).populate("emittedBy").exec();
    console.log("EveryDay Report of user:", monthlyReport);
    return res.status(200).json({
      success: true,
      monthlyReport,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching monthly CO2 emission report",
      error: err.message,
    });
  }
};

exports.userCompare = async (req, res) => {
  try {
    const {name} = req.body;
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Please enter name",
      });
    }
    const userReport = await User.find({firstName:name}).populate("co2Data").exec();
    console.log("User wise Report of users:", userReport);
    return res.status(200).json({
      success: true,
      userReport,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching user wise CO2 emission report",
      error: err.message,
    });
  }
}
