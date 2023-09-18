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
import BurningEarth from "./BurningEarth.jpg";
import DryEarth from "./DryEarth.jpg";
import GreenEarth from "./GreenEarth.jpg";
const Compare = () => {
  const { token } = useContext(AuthContext);
  const [report, setReport] = useState([]);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState("");
  const [emission, setEmission] = useState([]);
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
        setEmission(response.data.emission);
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
      VirtualBadge(myAmt);
      const badgeInfo = VirtualBadge(myAmt);
      setComparison(true);
      setRefinedData(badgeInfo);
    } catch (error) {
      console.error("Error while comparing with friend:", error);
    }
  };

  useEffect(() => {
    fetchEveryDayData();
    fetchUserData();
    // console.log("User Emission inside compare.js frontend ", emission)
    VirtualBadge(myAmt);
    window.scrollTo(0, 0);
  }, []);

  const VirtualBadge = (value) => {
    let badgeInfo = {
      badgeIcon: GreenEarth,
      badgeText: "Green Earth Badge 🥳🥳",
      moreText: "",
    };

    if (value > 100) {
      badgeInfo = {
        badgeIcon: BurningEarth,
        badgeText: "Burning Earth Badge",
        moreText: "Work Hard to Get",
        ExtraBadge: DryEarth,
      };
    } else if (value > 50) {
      badgeInfo = {
        badgeIcon: DryEarth,
        badgeText: "Dry Earth Badge",
        moreText: "",
        ExtraBadge: GreenEarth,
      };
    }

    return badgeInfo;
  };

  const VirtualBadgeElement = (
    <div className="VirtualBadges">
      <p>
        According to your Emissions, you have been awarded with{" "}
        {refinedData.badgeText}
      </p>
      <img
        alt="VirtualBadgeGreen"
        className="VirtualBadge1"
        src={refinedData.badgeIcon}
      ></img>
      <p>{refinedData.moreText}</p>
      <img
        alt="MoreBadges"
        src={refinedData.ExtraBadge}
        className="ExtraBadge"
      ></img>
    </div>
  );

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
          {report.length === 0 && (
            <p className="text-5xl text-neutral-500">
              Please submit some Data to see your emission....
            </p>
          )}
        </div>
      </div>
      <div className="ComparisonWithFriend">
        <h1>Compare With your Friends</h1>
        {showComparison && (
          <div>
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
            {VirtualBadgeElement}
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
          ></input>
          <button
            type="submit"
            onClick={CompareFriendsHandler}
            // VirtualBadge(myAmt);
            // }}
          >
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
