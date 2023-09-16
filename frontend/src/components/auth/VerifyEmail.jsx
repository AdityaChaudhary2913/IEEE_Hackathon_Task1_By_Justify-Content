import React, { useContext, useEffect, useState } from 'react'
import OTPInput from 'react-otp-input';
import { BiArrowBack } from 'react-icons/bi';
import { RxCountdownTimer } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { sendOTP, unAuthenticatedPostRequest } from '../../apiCalling/auth';
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-hot-toast';

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const { signupData, setSignupData } = useContext(AuthContext)
  const navigate = useNavigate();
  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);
  const resendHandler = async () => {
    await sendOTP('/auth/sendotp', signupData, navigate);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const email = signupData.email;
    const firstName = signupData.firstName;
    const lastName = signupData.lastName;
    const password = signupData.password;
    const city = signupData.city
    const body = { email, firstName, lastName, password, city, otp };
    const response = unAuthenticatedPostRequest('/auth/signup', body, navigate, "signup");
    navigate('/login')
    if(response){
      toast.success("Account Created Successful!")
    }
    else{
      toast.error("Failed Account Creation!")
    }
  }
  return (
    <div className="h-screen grid place-items-center bg-gradient-to-b from-[#1f2728] via-[#131618] to-[#070808]">
      <div className="max-w-[500px] p-4 lg:p-8">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem] text-center">Verify Email</h1>
        <p className="text-[1.125rem] leading-[1.625rem] my-4 text-white">A verification code has been sent to you. Enter the code below</p>
        <form onSubmit={submitHandler}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props}
            placeholder="-"
            style={{boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
            className="w-[48px] lg:w-full border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50" />}
          />
          <button type="submit"
            className="w-full bg-green-500 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-black">
            Verify Email
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
            <Link to="/signup">
              <p className="text-richblack-5 flex items-center gap-x-2">
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center text-blue-100 gap-x-2"
              onClick={resendHandler}
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
      </div>
    </div>
  )
}

export default VerifyEmail