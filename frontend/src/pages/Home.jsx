import React from 'react'
import Hero from '../components/Hero'
import Timer from '../components/timer'
import KeynoteSpeakerCard from '../components/keynote_card'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f0d39] to-[#201867]">
        <Hero />
        <Timer targetDate={new Date("2025-01-23T00:00:00")} />
        <KeynoteSpeakerCard />
        
        <Footer />
    </div>
  )
}

export default Home
