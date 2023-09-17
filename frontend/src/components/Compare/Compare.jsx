import React, { useContext, useEffect, useState } from "react";
import { everyDayReport, userReport } from "../../apiCalling/auth";
import AuthContext from "../../context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import LineChartGraph from "./LineChart";
import "./Compare.css";

const Compare = () => {
  // const [report, setReport] = useState([]);
  // const [name, setName] = useState(null);
  // const [userData, setUserData] = useState([]);
  // const { token } = useContext(AuthContext);
  // var refinedData;
  // const fetchEveryDayData = async () => {
  //   const response = await everyDayReport(token);
  //   if (!response) {
  //     console.log("Error while fetchEveryDayData");
  //     return;
  //   }
  //   setReport(response.data.monthlyReport);
  // };
  // const fetchUserData = async () => {
  //   const body = { name };
  //   const response = await userReport(body, token);
  //   if (!response) {
  //     console.log("Error while fetchUserData");
  //     return;
  //   }
  //   setUserData(response.data.userReport);
  // };
  // useEffect(() => {
  //   fetchEveryDayData();
  //   // fetchUserData();
  //   console.log("This is monthly report", report);
  //   if (report) {
  //     // const data = refineData(report);
  //     // refinedData = report?.map((item) => {
  //     //   console.log("ITEM", item.amount);
  //     //   return {
  //     //     value: item.amount,
  //     //     date: item.emittedOn.getDay(),
  //     //   };
  //     // });
  //     console.log("Refined Data", refinedData[0]?.amount);
  //   } else {
  //     console.log("test");
  //     fetchEveryDayData();
  //   }
  //   // console.log("This is your Refined Data" + Data);
  //   // console.log("This is searched used report", userData);
  // }, []);
  const [showComparison, setComparison] = useState(false);
  const CompareFriendsHandler = (event) => {
    event.preventDefault();
    setComparison(true);
  };

  return (
    <div className="CompareEmmisions">
      <div className="MonthlyComparisonHeading">
        <h1>Your Monthly Comparison</h1>
      </div>
      <div className="MonthlyComparison">
        {/* {report[0]?.amount} */}
        <div className="LineGraph">
          <LineChartGraph />
        </div>
      </div>
      <div className="ComparisonWithFriend">
        <h1>Compare With your Friends</h1>
        <form>
          <label>Enter your Friend's Email ID</label>
          <input type="email"></input>
          <button onClick={CompareFriendsHandler}>COMPARE</button>
        </form>
        {showComparison && (
          <div className="CompareEmmission">
            <h1>Your Monthly Emmision :</h1>
            <h3>{}</h3>
            <h1>Friends Emmision :</h1>
            <h3>{}</h3>
          </div>
        )}
      </div>
      <div className="ReturnBAck">
        <h1>Want to Return Back Something To Earth ?</h1>
        <NavLink to="/offset" className="OFFSETButton">
          OFFSET
        </NavLink>
      </div>
    </div>
  );
};
export default Compare;
