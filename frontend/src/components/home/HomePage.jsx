import React from "react";
import { Link } from "react-router-dom";
import Part from "../ParticleBg";

const HomePage = () => {
  return (
    <>
      <div className="top" style={{ zIndex: "-2" }}>
        <Part />
        <div className="head" style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "4rem",
              color: "rgba(16, 65, 16, 0.749)",
              fontFamily: "cursive",
              marginTop: "10rem",
            }}
          >
            "Every footprint counts. Begin your eco-friendly journey with us and
            watch the world transform, one step at a time."
          </h1>
        </div>
        <div
          className="flex items-center justify-evenly my-auto w-full h-full"
          style={{ height: "40vh" }}
        >
          <Link to="/login">
            <button
              type="button"
              class="btn btn-outline-success"
              style={{ height: "6rem", width: "10rem", fontSize: "2.6rem" }}
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              type="button"
              class="btn btn-outline-success"
              style={{ height: "6rem", width: "10rem", fontSize: "2.6rem" }}
            >
              SignUp
            </button>
          </Link>
        </div>
      </div>
      <div
        className="over"
        style={{
          zIndex: "4",
          position: "absolute",
          bottom: "0",
          top: "0",
          width: "100%",
          height: "10rem",
          backgroundColor: "rgba(50, 159, 50, 1)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "6rem",
            color: "#355E3B",
            fontFamily: "cursive",
            marginTop: "1rem",
          }}
        >
          {" "}
          CarbonFoot Print Tracker
        </h1>
      </div>
    </>
  );
};

export default HomePage;
