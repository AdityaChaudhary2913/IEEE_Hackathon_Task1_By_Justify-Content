import React, { useContext, useEffect, useState } from "react";
import { compareMeAndUser, everyDayReport, userReport } from "../../apiCalling/auth";
import AuthContext from "../../context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import LineChartGraph from "./LineChart";
import "./Compare.css";

const Compare = () => {
  const [report, setReport] = useState([]);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null)
  const [userData1, setUserData] = useState([]);
  const { token, userData } = useContext(AuthContext);
  const [frndAmt, setFrndAmt] = useState(null);
  const [myAmt, setMyAmt] = useState(null)
  var refinedData;
  const fetchEveryDayData = async () => {
    const response = await everyDayReport(token);
    if (!response) {
      console.log("Error while fetchEveryDayData");
      return;
    }
    setReport(response.data.monthlyReport);
  };
  const fetchUserData = async () => {
    const body = { name };
    const response = await userReport(body, token);
    if (!response) {
      console.log("Error while fetchUserData");
      return;
    }
    setUserData(response.data.userReport);
  };
  useEffect(() => {
    fetchEveryDayData();
    if (report) {
      const refinedData = report?.map((item) => {
        const date = new Date(item.emittedOn);
        const day = date.getDate();
        return {
          value: item.amount,
          date: day,
        };
      });
    } else {
      fetchEveryDayData();
    }
    console.log(userData)
  }, []);
  const [showComparison, setComparison] = useState(false);
  const CompareFriendsHandler = async (event) => {
    event.preventDefault();
    setComparison(true);
    const body = {email}
    const response = await compareMeAndUser(body, token);
    setFrndAmt(response?.friendAmount)
    setMyAmt(response?.userAmount)
    console.log(response)
    setEmail(null)
  };
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
        {showComparison && (
          <div>
            <div className="flex justify-center items-center">
              <p className="text-9xl">Your Total Emmision :</p>
              <p className="text-2xl">{myAmt}</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-9xl">Friend's Total Emmision :</p>
              <p className="text-2xl">{frndAmt}</p>
            </div>
          </div>
        )}
        <form>
          <label htmlFor="email">Email address of your friend</label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Email...."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          <button type="submit" onClick={CompareFriendsHandler}>COMPARE</button>
        </form>
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
