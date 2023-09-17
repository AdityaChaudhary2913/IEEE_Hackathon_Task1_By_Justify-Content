import React, { useContext, useEffect, useState } from "react";
import {
  compareMeAndUser,
  everyDayReport,
  userReport,
} from "../../apiCalling/auth";
import AuthContext from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  Legend,
  YAxis,
} from "recharts";
import "./Compare.css";
const Compare = () => {
  const { token, userData } = useContext(AuthContext);
  const [report, setReport] = useState([]);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState("");
  const [userData1, setUserData] = useState([]);
  const [frndAmt, setFrndAmt] = useState(null);
  const [myAmt, setMyAmt] = useState(null);
  const [refinedData, setRefinedData] = useState([]);
  const [showComparison, setComparison] = useState(false);

  const fetchEveryDayData = async () => {
    try {
      const response = await everyDayReport(token);
      if (response && response.data.monthlyReport) {
        const refinedData = response.data.monthlyReport.map((item) => {
          const date = new Date(item.emittedOn);
          const day = date.getDate();
          return {
            value: item.amount,
            date: day,
          };
        });
        console.log("Refined Data is ", refinedData);
        refinedData.sort((a, b) => a.date - b.date);

        console.log(refinedData);
        setReport(refinedData);
      } else {
        console.log("No data found in response.");
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const body = { name };
      const response = await userReport(body, token);
      if (response && response.data.userReport) {
        setUserData(response.data.userReport);
      } else {
        console.log("No user data found in response.");
      }
    } catch (error) {
      console.error("Error while fetching user data:", error);
    }
  };

  const CompareFriendsHandler = async (event) => {
    event.preventDefault();
    try {
      const body = { email };
      const response = await compareMeAndUser(body, token);
      setFrndAmt(response?.friendAmount);
      setMyAmt(response?.userAmount);
      setComparison(true);
    } catch (error) {
      console.error("Error while comparing with friend:", error);
    }
  };

  useEffect(() => {
    fetchEveryDayData();
    fetchUserData();
  }, []);

  return (
    <div className="CompareEmmisions">
      <div className="MonthlyComparisonHeading">
        <h1>Your Monthly Comparison</h1>
      </div>
      <div className="MonthlyComparison">
        <div className="LineGraph">
          {report.length > 0 && (
            <LineChart
              width={350}
              height={300}
              data={report}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="" />
              <Tooltip />
              <Legend
                className="Legend"
                width={100}
                layout="vertical"
                iconSize={30}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="date" stroke="#82ca9d" />
            </LineChart>
          )}
        </div>
      </div>
      <div className="ComparisonWithFriend">
        <h1>Compare With your Friends</h1>
        {showComparison && (
          <div className="ComparisonValues">
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
          <button type="submit" onClick={CompareFriendsHandler}>
            COMPARE
          </button>
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
