import { createContext } from "react";

const AuthContext = createContext({
  signupData:null,
  setSignupData:(createData) => {},
})

export default AuthContext;