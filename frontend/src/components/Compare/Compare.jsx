import React, { useContext, useEffect, useState } from "react";
import { everyDayReport, userReport } from "../../apiCalling/auth";
import AuthContext from "../../context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import LineChartGraph from "../Calculator/LineChartGraph";
import "./Compare.css";


const Compare = () => {
  const [report, setReport] = useState([]);
  const [name, setName] = useState("Aditya");
  const [userData, setUserData] = useState([]);
  const {token} = useContext(AuthContext);
  const fetchEveryDayData = async () => {
    const response = await everyDayReport(token)
    if(!response){
      console.log("Error while fetchEveryDayData")
      return ;
    }
    setReport(response.data.monthlyReport)
  }
  const fetchUserData = async () => {
    const body = {name}
    const response = await userReport(body, token)
    if(!response){
      console.log("Error while fetchUserData")
      return ;
    }
    setUserData(response.data.userReport)
  }
  useEffect(() => {
    fetchEveryDayData();
    fetchUserData()
    console.log("This is monthly report", report)
    console.log("This is searched used report", userData)
  }, [])
  return (
    <div className="CompareEmmisions">
      <div className="MonthlyComparisonHeading">
        <h1>Your Monthly Comparison</h1>
      </div>
      <div className="MonthlyComparison">
        <div className="LineGraph">
          <LineChartGraph />
        </div>
      </div>
      <div className="ComparisonWithFriend">
        <h1>Compare With your Friends</h1>
      </div>
      <div>
        <h1>Want to Return Back Something To Earth</h1>
        <NavLink to="/offset">OFFSET</NavLink>
      </div>
    </div>
  );
};
export default Compare;
