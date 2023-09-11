import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { resetPasswordFinal } from '../../apiCalling/auth'
import { toast } from 'react-hot-toast'

const UpdatePW = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { password, confirmPassword } = formData
  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    const token = location.pathname.split("/").at(-1);
    const body = {password, token}
    console.log(body)
    const response = await resetPasswordFinal('/auth/reset-password', body, navigate);
    if(response){
      toast.success("Password Reset Successfully!");
    }
    else{
      toast.error("Password Not Reset!");
    }
  }
  return (
    <div className="grid h-screen place-items-center bg-gradient-to-b from-[#1f2728] via-[#131618] to-[#070808]">
      <div className="max-w-[500px] p-4 lg:p-8">
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-white">Choose New Password</h1>
        <p className="my-4 text-[1.125rem] leading-[1.625rem] text-white">
          Almost done. Enter your new password and youre all set.
        </p>
        <form onSubmit={submitHandler}>
            <label className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
                New Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={changeHandler}
                placeholder="Enter Password"
                // className="form-style w-full !pr-10"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="rounded-[0.5rem] bg-richblack-800 p-[12px] w-full text-richblack-5"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <label className="relative mt-3 block">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
                Confirm New Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={changeHandler}
                placeholder="Confirm Password"
                // className="form-style w-full !pr-10"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="rounded-[0.5rem] bg-richblack-800 p-[12px] w-full text-richblack-5"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>

            <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-green-500 py-[12px] px-[12px] font-medium text-black"
            >
              Reset Password
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

export default UpdatePW