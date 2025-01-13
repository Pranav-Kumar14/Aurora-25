import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import CountdownTimer from '../components/Timer';
import FAQ from '../components/faq';
const image="/aurora_logo.png"
const teamRules = [
  "Each team can have a minimum of 2 and a maximum of 4 members.",
  "Each team should have one team leader who will be responsible for forwarding all necessary information to their team.",
  "Each team must select 1 track of their choice out of the 4 given tracks and provide a problem statement relevant to that track during registration.",
  "We expect all team members to be present at the Team Check-In on Day 1. A team won't be registered if all the members are not physically present.",
];


const Home = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='bg-[#010627] text-white min-h-dvh w-screen '>
    <div className=' flex  flex-col items-center justify-center font-press-start h-screen'>
       <h1 className='font-press-start font-bold text-[40px] text-center md:text-[80px] '> AURORA </h1> 
       <div>
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
  className="ml-7 font-press-start block text-[15px] max-w-[90%]"
  repeat={Infinity}
/>


       </div>
      

       {/* <p className='text-white w-10/12  font-press-start'> Unleash your creativity and innovation at Aurora Hackathon! Collaborate, code, and create transformative solutions to real-world challenges. Join us for an unforgettable journey of learning, networking, and problem-solving.</p> */}
       <button onClick={() => navigate('/hackathon-info ')} className='bg-black text-white p-5 my-8 '> Register now</button>

      
       <CountdownTimer/>
    </div>
    <div className='flex flex-col gap-6 mb-6'>
    <h1 className='font-press-start text-xl text-center'>2nd January 2025</h1>
    <h1 className='font-press-start text-xl text-center'>Time</h1>
    <h1 className='font-press-start text-xl text-center'>Location</h1>
    <h1 className='font-press-start text-xl text-center'>Team Size 2-4</h1>

    </div>
    <div id='Prizes'>
      <h1 className='font-press-start text-2xl text-center'> Cash Prizes</h1>

      <div className='flex items-center justify-center'>
        <div className='m-auto h-auto w-[20%]  p-5'>
          <img src='/aurora_logo.png' alt="" />
        </div>
        <div className='m-auto h-auto w-[20%]  p-5'>
          <img src='/aurora_logo.png' alt="" />
        </div>
        <div className='m-auto h-auto w-[20%]  p-5'>
          <img src='/aurora_logo.png' alt="" />
        </div>
        </div>
        <div id="Rules" className="flex flex-col justify-center items-center">
      <h2 className="font-press-start text-2xl text-center mb-6">RULES</h2>
      <ul className="list-disc w-[60%] space-y-4 font-press-start text-sm pl-4">
        {teamRules.map((rule, index) => (
          <li key={index} className='font-press-start'>{rule}</li>
        ))}
      </ul>
    </div>


    </div>

   
    <FAQ/>
    </div>
    </>
  
  )
}


export default Home