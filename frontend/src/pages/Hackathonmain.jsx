import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import CountdownTimer from '../components/Timer';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-[#010627] text-white flex  flex-col items-center justify-center h-dvh w-screen font-pixelify '>
       <h1 className='font-press-start font-bold text-[80px] text-center '> AURORA </h1> 
       <TypeAnimation
  sequence={[
    'Build amazing projects',
    1000, // wait 1s before changing to the next text
    'Network with peers',
    1000,
    'Win awesome prizes',
    1000,
  ]}
  wrapper="span"
  speed={50} // Adjust typing speed
  className="font-press-start block text-[25px] max-w-full"
  repeat={Infinity}
/>


       {/* <p className='text-white w-10/12  font-press-start'> Unleash your creativity and innovation at Aurora Hackathon! Collaborate, code, and create transformative solutions to real-world challenges. Join us for an unforgettable journey of learning, networking, and problem-solving.</p> */}
       <button onClick={() => navigate('/hackathon-info ')} className='bg-black text-white p-5 mt-8'> Register now</button>

       <CountdownTimer/>

    </div>
  
  )
}


export default Home