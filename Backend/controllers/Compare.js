const Co2Data = require("../models/Co2Data");


exports.monthlyCo2Report = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Please login first",
      });
    }
    console.log("UserID:", userId); // Log the userID for debugging
    const monthlyReport = await Co2Data.aggregate([
      {
        $match: {
          emittedBy: userId,
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$emittedOn" },
            month: { $month: "$emittedOn" },
          },
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);
    console.log("Monthly Report:", monthlyReport); // Log the aggregation result for debugging
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

exports.cityWiseCompare = async (req, res) => {
  
}
