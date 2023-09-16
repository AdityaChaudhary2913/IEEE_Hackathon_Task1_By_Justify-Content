import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { everyDayReport, userReport } from "../../apiCalling/auth";
import AuthContext from "../../context/AuthContext";

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
    <div>
      <h1>Compare</h1>
      <Link to="/offset">
        <button>Want To Return Something Back to Earth? </button>
      </Link>
    </div>
  );
};
export default Compare;
