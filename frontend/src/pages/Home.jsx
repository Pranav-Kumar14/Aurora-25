import React from 'react'
import Hero from '../components/Hero'
import Timer from '../components/timer'
import KeynoteSpeakerCard from '../components/keynote_card'
import Footer from '../components/Footer'
import hackathon from '../images/HACKATHON.png'
import partners from '../images/PARTNERS.png'
import workshops from '../images/WORKSHOPS.png'
import HackathonCard from '../components/Hackathon_card'


const Home = () => {
    return (
        <div className="bg-gradient-to-r from-[#0f0d39] to-[#201867]">
            <Hero />
            <Timer targetDate={new Date("2025-01-23T00:00:00")} />
            <KeynoteSpeakerCard />

            <img src={partners} alt="partners" className="w-1/4 py-8 mx-auto" />

            <img src={workshops} alt="workshops" className="w-1/4 py-8 mx-auto" />

            <img src={hackathon} alt="hackathon" className="w-1/4 py-8 mx-auto" />

            <HackathonCard />

        </div>
    )
}

export default Home
