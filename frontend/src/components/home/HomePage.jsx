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
        <div to='/Landing' className="text-center rounded-2xl md:w-[10%] mx-auto p-3 text-xl text-white bg-black">
          <Link to="/Landing">Continue as a Guest...</Link>
        </div>
      </div>
      <div
        className="over"
      >
        <h1>
          CarbonFoot Print Tracker
        </h1>
      </div>
    </>
  );
};

export default HomePage;
