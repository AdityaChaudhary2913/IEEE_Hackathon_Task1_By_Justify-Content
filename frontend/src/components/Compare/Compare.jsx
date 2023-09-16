import React from "react";
import { Link, NavLink } from "react-router-dom";
import LineChartGraph from "../Calculator/LineChartGraph";
import "./Compare.css";

const Compare = () => {
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
