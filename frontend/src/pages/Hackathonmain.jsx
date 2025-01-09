import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-violet-700 flex  flex-col items-center justify-center h-dvh w-screen'>
       <h1 className='font-pixelify text-[120px] text-center'> AURORA</h1> 
       <p className='text-white w-10/12 '> Unleash your creativity and innovation at Aurora Hackathon! Collaborate, code, and create transformative solutions to real-world challenges. Join us for an unforgettable journey of learning, networking, and problem-solving.</p>
       <button onClick={() => navigate('/hackathon-info ')} className='bg-black text-white p-5'> Register now</button>
    </div>
  )
}


export default Home