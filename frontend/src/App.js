import LoginPage from "./components/auth/LoginPage";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignupPage from "./components/auth/SignupPage";
import HomePage from "./components/home/HomePage";
import { Toaster } from "react-hot-toast";
import VerifyEmail from "./components/auth/VerifyEmail";
import { useState } from "react";
import AuthContext from './context/AuthContext'
import ForgotPassword from "./components/auth/ForgotPassword";
import UpdatePW from "./components/auth/UpdatePW";

function App() {
  const [signupData, setSignupData] = useState(null);
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <AuthContext.Provider value={{signupData, setSignupData}}>
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:id" element={<UpdatePW/>} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
