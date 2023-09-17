import React from "react";
import { Link } from "react-router-dom";
import Part from "../ParticleBg";
import Home from "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="top">
        <Part />
        <div className="head" >
          <h1
            // style={{
            //   fontSize: "4rem",
            //   color: "rgba(16, 65, 16, 0.749)",
            //   fontFamily: "cursive",
            //   marginTop: "10rem",
            // }}
          >
            "Every footprint counts. Begin your eco-friendly journey with us and
            watch the world transform, one step at a time."
          </h1>
        </div>
        <div
          className="flex items-center justify-evenly my-auto w-full h-full"
          
        >
          <Link to="/login">
            <button
              type="button"
              class="btn btn-outline-success"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              type="button"
              class="btn btn-outline-success"
            >
              SignUp
            </button>
          </Link>
        </div>
      </div>
      <div
        className="over"
        // style={{
        //   zIndex: "4",
        //   position: "absolute",
        //   bottom: "0",
        //   top: "0",
        //   width: "100%",
        //   height: "10rem",
        //   backgroundColor: "rgba(50, 159, 50, 1)",
        //   textAlign: "center",
        //}}
      >
        <h1>
          CarbonFoot Print Tracker
        </h1>
      </div>
    </>
  );
};

export default HomePage;
