import React from 'react'
import { Link } from 'react-router-dom'
import Part from '../ParticleBg';

const HomePage = () => {
  return (
    <>
     <Part/>
    <div className='flex items-center justify-evenly my-auto w-full h-full' style={{border:'2px solid',height:'90vh'}}>
      {/* <Part/> */}
      <Link to='/login'><button type="button" class="btn btn-outline-success" style={{height:'6rem', width:'10rem', fontSize:'2.6rem'}}>Login</button></Link>
      <Link to='/signup'><button type="button" class="btn btn-outline-success" style={{height:'6rem', width:'10rem',fontSize:'2.6rem'}}>SignUp</button></Link>
    </div>
    </>
  )
}

export default HomePage