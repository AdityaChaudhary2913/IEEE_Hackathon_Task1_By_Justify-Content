import React, { useContext, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { sendOTP } from '../../apiCalling/auth';
import { toast } from 'react-hot-toast';
import AuthContext from '../../context/AuthContext'

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signupData, setSignupData } = useContext(AuthContext)
  const navigate = useNavigate();
  const useSubmitHandler = async (event) => {
    event.preventDefault();
    const data = {firstName, lastName, email, password, city};
    const emailData = {email}
    setSignupData(data);
    const response = await sendOTP('/auth/sendotp', emailData, navigate);
    console.log(response)
    if(response){
      toast.success("SignUp Successful!")
    }
    else{
      toast.error("Failed SignUp!")
    }
  }
  return (
    <div className='h-screen w-full overflow-auto bg-gradient-to-b from-[#1f2728] via-[#131618] to-[#070808] m-auto p-10'>
      <form onSubmit={useSubmitHandler} className='md:w-[40%] md:mt-5 bg-[#070808] space-y-3 text-white rounded-xl mx-auto flex flex-col  justify-center p-10'>
        <p className='md:text-4xl md:font-extrabold text-2xl text-center font-bold'>Sign up for Carbon Footprint Tracker</p>
        <div className='h-[1px] w-96 bg-gray-700 my-3'></div>
        <div className='flex space-x-3'>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input 
              name='firstName'
              type='text'
              id='firstName'
              placeholder='First name.'
              value={firstName}
              onChange={(e)=>{setFirstName(e.target.value)}}
              className="w-full rounded-[0.5rem] bg-slate-800 p-[12px]"
            />
          </div>
          <div>
            <label htmlFor='firstName'>Last Name</label>
            <input 
              name='lastName'
              type='text'
              id='lastName'
              placeholder='Last name.'
              value={lastName}
              onChange={(e)=>{setLastName(e.target.value)}}
              className="w-full rounded-[0.5rem] bg-slate-800 p-[12px]"
            />
          </div>
        </div>
        <div>
          <label htmlFor='email'>What’s your email address?</label>
          <input 
            name='email'
            type='email'
            id='email'
            placeholder='Enter your email.'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className="w-full rounded-[0.5rem] bg-slate-800 p-[12px]"
          />
        </div>
        <div>
          <label htmlFor='city'>What’s your city?</label>
          <input 
            name='city'
            type='city'
            id='city'
            placeholder='Enter your city.'
            value={city}
            onChange={(e)=>{setCity(e.target.value)}}
            className="w-full rounded-[0.5rem] capitalize bg-slate-800 p-[12px]"
          />
        </div>
        <div className='relative'>
          <label htmlFor='password'>Create a password</label>
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
          <input 
            name='password'
            type={showPassword ? "text" : "password"}
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="w-full rounded-[0.5rem] bg-slate-800 p-[12px]"
          />
        </div>
        <button type='submit' className='bg-green-500 rounded-2xl py-2 md:py-3 md:w-[30%] mx-auto px-5' style={{width:'20rem'}}>Create Account</button>
        <div className='h-[1px] w-96 bg-gray-700 my-3'></div>
        <div className='flex flex-col justify-center items-center' style={{fontSize:'1.5rem'}}>
          <p>Have an account?</p>
          <div className='flex gap-4 items-center'>
            <Link to='/login'><u>Log In</u></Link>
            <Link className='bg-yellow-300 text-black rounded-full px-5 py-1 text-center'>Sign up <br /> with Google</Link>
          </div>
        </div>
      </form>
      <div className="over" style={{zIndex:'4',position:'absolute',bottom:'0',top:'0',left:'0', width:'100%',height:'10rem',backgroundColor:'rgba(50, 159, 50, 1)'}}>
      <h1 style={{fontSize:'6rem', marginLeft:'30rem', color:'#355E3B',fontFamily:'cursive',marginTop:'1rem'}}> CarbonFoot Print Tracker</h1>
    </div>
    </div>
  )
}

export default SignupPage