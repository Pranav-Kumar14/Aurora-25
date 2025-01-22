import { useRef } from 'react'
// import icon1 from '../images/workshop1.png'
// import icon2 from '../images/workshop2.jpeg'
// import icon3 from '../images/workshop3.jpg'
// import icon4 from '../images/arpan.jpeg'
// import icon5 from '../images/workshop4.jpg'
// import icon6 from '../images/workshop6.jpg'
// import icon7 from '../images/workshop5.jpg'

// import icon8 from '../images/workshop7.jpg'
// import icon9 from '../images/workshop8.jpg'
// import icon10 from '../images/ctf-latest.png'
// import icon11 from '../images/workshop9.jpg'
// import icon12 from '../images/workshop10.jpg'
// import icon13 from '../images/workshop11.jpg'
import icon1 from "../images/workshop1.png";
import icon2 from "../images/workshop2.jpeg";
import icon3 from "../images/workshop3.jpg";
import icon4 from "../images/workshop4.jpg";
import icon5 from "../images/workshop5.jpg";
import icon6 from "../images/workshop6.jpg";
import icon7 from "../images/workshop7.jpg";
import icon8 from "../images/workshop8.jpg";
import icon9 from "../images/workshop9.jpg";
import icon10 from "../images/workshop10.jpg";
import icon11 from "../images/workshop11.jpg";



import dp1 from '../images/acm.png'
import dp2 from '../images/dronaid.jpeg'
import dp3 from '../images/leanin.jpeg'
import dp4 from '../images/iste.png'
import dp5 from '../images/varise.png'

import dp6 from '../images/tacm.jpeg'
import dp7 from '../images/mist.jpeg'

import dp8 from '../images/adg_logo.jpg'
import dp9 from '../images/iste.png'
import dp10 from '../images/mist.jpeg'
import dp11 from '../images/Blank.jpeg'
import dp12 from '../images/iste.png'
import dp13 from '../images/ACMW_LOGO.png'


import {workshops} from '../constants/workshops'
import { useNavigate } from 'react-router-dom'


export default function TimelineSection() {
  const navigate = useNavigate();

  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11]
  const dps = [dp1,dp2,dp3,dp4,dp5,dp6,dp7,dp8,dp9,dp10,dp11,dp12,dp13]
  const scrollContainerRef = useRef(null)

  return (
    <div className="lg:mb-16 lg:mt-32 mt-16">
      <div className="text-center mb-16">
        <h2 className="lg:text-5xl font-bold font-heading tracking-wider text-white mb-4 text-2xl">TIMELINE</h2>
        <p className="text-gray-300">24th - 31st January, 2025</p>
      </div>
      
      <div className="relative isolate">
        <div className="absolute h-1 bg-gradient-to-r from-purple-600/20 via-purple-600 to-purple-600/20 top-1/2 left-0 right-0 -translate-y-1/2 blur-sm" />
        <div className="absolute h-0.5 bg-gradient-to-r from-purple-600/20 via-purple-600 to-purple-600/20 top-1/2 left-0 right-0 -translate-y-1/2" />
        
        <div 
          ref={scrollContainerRef}
          className="relative flex gap-20 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-8 pb-4 scroll-smooth h-[500px]"
          style={{ Height: '500px' }}
        >
          
          {workshops.map((workshop) => (
            <div key={workshop.id} className="snap-center flex flex-col items-center group flex-shrink-0">
              <div className="relative z-10">
                {/* <div className="w-20 h-20 rounded-full bg-[#0ea5e9]/20 absolute -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="w-16 h-16 rounded-full bg-[#0ea5e9]/30 absolute -translate-x-1/2 -translate-y-1/2 border-2 border-[#0ea5e9] shadow-[0_0_15px_rgba(14,165,233,0.5)]" /> */}
                <div className="w-14 h-14 rounded-full bg-[#020617] relative overflow-hidden border-2 border-[#0ea5e9]">
                  <img
                    src={dps[`${workshop.id-1}`]}
                    alt=""
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              
              <div className="mt-12 w-64 transform transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative bg-gray-800/30 backdrop-blur-lg rounded-xl p-5 border border-purple-500/30 
                  group-hover:border-[#0ea5e9]/50 transition-all 
                  group-hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]
                  before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#0ea5e9]/5 before:to-transparent before:rounded-xl before:opacity-0 before:transition-opacity group-hover:before:opacity-100"
                >
                  <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg"
                  onClick={()=>{
                    navigate(`/Workshop${workshop.id}`)
                  }}
                  >
                    <img 
                      src={icons[`${workshop.id-1}`]}
                      alt=""
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-[#0ea5e9] transition-colors">{workshop.title}</h3>
                  <p className="text-sm font-medium text-[#0ea5e9] mb-2">{workshop.date}</p>
                  <p className="text-sm leading-relaxed text-gray-300/90">{workshop.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}