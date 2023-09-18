import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { sendOTP } from "../../apiCalling/auth";
import { toast } from "react-hot-toast";
import AuthContext from "../../context/AuthContext";
import "./SignUp.css";
import Part from '../ParticleBg';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signupData, setSignupData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { firstName, lastName, email, password, city };
    const emailData = { email };
    setSignupData(data);
    const response = await sendOTP("/auth/sendotp", emailData, navigate);
    console.log(response);
    if (response) {
      toast.success("SignUp Successful!");
    } else {
      toast.error("Failed SignUp!");
    }
  };

  return (
    <div className="container">
      <Part/>
      <form onSubmit={handleSubmit} className="form">
        <p className="title">Sign up for Carbon Footprint Tracker</p>
        <div className="separator"></div>
        <div className="input-container">
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            id="firstName"
            placeholder="First name."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Last name."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">What’s your email address?</label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Enter your email."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label htmlFor="city">What’s your city?</label>
          <input
            name="city"
            type="city"
            id="city"
            placeholder="Enter your city."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Create a password</label>
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="password-toggle relative"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="Eye input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Create Account
        </button>
        <div className="separator"></div>
        <div className="login-options">
          <p>Have an account?</p>
          <div className="login-links">
            <Link to="/login">
              <u>Log In</u>
            </Link>
          </div>
        </div>
      </form>
      <div className="cover">
        <h1>Carbon FootPrint Tracker</h1>
      </div>
    </div>
  );
};

export default SignupPage;
