import { createContext } from "react";

const AuthContext = createContext({
  signupData:null,
  setSignupData:(createData) => {},
  userData:null,
  setUserData:(createUserData) => {},
  token:localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  setToken:(createToken) => {}
})

export default AuthContext;