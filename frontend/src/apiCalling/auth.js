import axios from "axios"
import { toast } from "react-hot-toast"
import jwtDecode from 'jwt-decode';

const URL = process.env.REACT_APP_BACKEND_URL;

export const unAuthenticatedPostRequest = async (route, body, navigate, text, setUserData, setToken) => {
  const toastId = toast.loading("Loading...")
  const setData = async(token) => {
    if(token){
      const decodedToken = await jwtDecode(token)
      if(decodedToken){
        setUserData(decodedToken)
      }
    }
  }
  try{
    const response = await axios.post(URL+route, body)
    console.log("Authentication Done!")
    toast.dismiss(toastId)
    if(text === "login"){
      setToken(response.data.token);
      localStorage.setItem("token", JSON.stringify(response.data.token))
      setData(response.data.token)
      navigate('/')
    }
    else{
      navigate('/login')
    }
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

export const manageCo2 = async (route, body, token) => {
  const toastId = toast.loading("Loading...")
  try{
    const response = await axios.post(URL+route, body, {headers: {
      Authorization: `Bearer ${token}`
    }})
    toast.dismiss(toastId)
    return response
  } catch(err){
    console.log(err)
    console.log("Error while Adding Co2!")
  }
  toast.dismiss(toastId)
}

export const everyDayReport = async (token) => {
  const toastId = toast.loading("Loading...")
  try{
    const response = await axios.get(URL+ "/auth/everyDayReport", {headers: {
      Authorization: `Bearer ${token}`
    }})
    toast.dismiss(toastId)
    console.log(response)
    return response
  } catch(err){
    console.log(err)
    console.log("Error while fetching Co2 report!")
  }
  toast.dismiss(toastId)
}

export const userReport = async (body, token) => {
  const toastId = toast.loading("Loading...")
  try{
    const response = await axios.post(URL+ "/auth/userCompare", body, {headers: {
      Authorization: `Bearer ${token}`
    }})
    toast.dismiss(toastId)
    console.log(response)
    return response
  } catch(err){
    console.log(err)
    console.log("Error while fetching user co2 report!")
  }
  toast.dismiss(toastId)
}

export const logout = (navigate, setUserData, setToken) => {
  const toastId = toast.loading("Loading...")
  try{
    setUserData(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate('/login')
    toast.success("Logged Out");
  } catch(err){
    console.log(err)
    console.log("Error while Logging Out!")
  }
  toast.dismiss(toastId)
}