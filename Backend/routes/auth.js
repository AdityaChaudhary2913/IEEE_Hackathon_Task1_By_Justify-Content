const express = require("express");
const router = express.Router();

const { login, signUp, sendotp, verification } = require("../controllers/Auth");
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");
const { Co2Manager, fetchTotalCo2Emitted, resetEmission } = require("../controllers/Co2Manager");
const { userCompare, everyDayCo2Report } = require("../controllers/Compare");

router.post("/signup", signUp);
router.post("/login", login);
router.post("/sendotp", sendotp)

router.post("/reset-password-token", resetPasswordToken);
router.post("/reset-password", resetPassword);

router.post("/addCo2", verification, Co2Manager)
router.get('/fetchTotalEmission', verification, fetchTotalCo2Emitted)
router.post('/resetEmission', verification, resetEmission)
router.get('/userCompare', verification, userCompare)
router.get('/monthlyReport', verification, everyDayCo2Report)

module.exports = router;