import axios from "axios"
import { toast } from "react-hot-toast"

const URL = process.env.REACT_APP_BACKEND_URL;

export const unAuthenticatedPostRequest = async (route, body, navigate, text) => {
  const toastId = toast.loading("Loading...")
  try{
    const response = await axios.post(URL+route, body)
    console.log("Authentication Done!")
    toast.dismiss(toastId)
    text === "login" ? (navigate('/')) : (navigate('/login'))
    return response
  } catch(err){
    console.log(err)
    console.log("Error while Authentication!")
  }
  toast.dismiss(toastId)
}

export const sendOTP = async (route, body, navigate) => {
  const toastId = toast.loading("Loading...")
  try{
    const response = await axios.post(URL+route, body)
    toast.dismiss(toastId)
    navigate('/verify-email')
    return response
  } catch(err){
    console.log(err)
    console.log("Error while Sending OTP!")
  }
  toast.dismiss(toastId)
}

export const sendResetPasswordMail = async (route, body, navigate) => {
  const toastId = toast.loading("Loading...")
  try{
    const response = await axios.post(URL+route, body)
    toast.dismiss(toastId)
    navigate('/verify-email')
    return response
  } catch(err){
    console.log(err)
    console.log("Error while Sending Mail!")
  }
  toast.dismiss(toastId)
}

export const resetPasswordFinal = async (route, body, navigate) => {
  const toastId = toast.loading("Loading...")
  try{
    const response = await axios.post(URL+route, body)
    toast.dismiss(toastId)
    navigate('/login')
    return response
  } catch(err){
    console.log(err)
    console.log("Error while Resetting Password!")
  }
  toast.dismiss(toastId)
}

