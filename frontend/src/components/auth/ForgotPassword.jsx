import React, { useState } from 'react'
import { BiArrowBack } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { sendResetPasswordMail } from '../../apiCalling/auth';
import { toast } from 'react-hot-toast';

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    const Mail = {email};
    const response = await sendResetPasswordMail('/auth/reset-password-token', Mail, navigate);
    if(response){
      setEmailSent(true);
      toast.success("Email Sent!");
    }
    else{
      setEmailSent(false);
      toast.error("Email Not Sent!");
    }
  }
  return (
    <div className="grid h-screen text-white place-items-center bg-gradient-to-b from-[#1f2728] via-[#131618] to-[#070808]">
      <div className="max-w-[500px] p-4 lg:p-8">
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
          {
            !emailSent ? "Reset Your Password" : "Check Your Email"
          }
        </h1>
        <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
          {
            !emailSent ? 
            "Have no fear, we'll email you instructions to reset your password." : 
            `We have sent the reset email to ${email}`
          }
        </p>
        <form onSubmit={submitHandler}>
          {
            !emailSent && (
              <label className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address  <sup className="text-pink-200">*</sup></p>
                <input
                  type='email'
                  required
                  name='email'
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                  placeholder='Enter your email address...'
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="rounded-[0.5rem] bg-richblack-800 p-[12px] w-full text-richblack-5"
                  />
              </label>
            )
          }
          <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-green-500 py-[12px] px-[12px] font-medium text-black"
              >
              {!emailSent ? "Submit" : "Resend Email"}
            </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
            <Link to="/login">
              <p className="flex items-center gap-x-2 text-richblack-5">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
      </div>
      
    </div>
  )
}

export default ForgotPassword