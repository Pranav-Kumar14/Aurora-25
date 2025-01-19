import Hero from '../components/Hero'
import CountdownTimer from '../components/CountdownTimer'
import KeynoteSpeakerCard from '../components/Keynote_card'
import hackathon from '../images/HACKATHON.png'
import partners from '../images/PARTNERS.png'
import workshopsImg from '../images/WORKSHOPS.png'
import HackathonCard from '../components/Hackathon_card'
import Carousel from '../components/Carousel'
import MediaSlider from '../components/slider'
import Timeline from '../components/Timeline'
import {workshops} from '../constants/workshops'



const Home = () => {
    return (
        <div className="bg-gradient-to-r from-[#0f0d39] to-[#201867]">
            <div className='mt-6 py-6'>
                <Hero />
            </div>
            <div className='py-12'>
                <CountdownTimer targetDate={new Date("2025-01-23T00:00:00")} />
            </div>
            <p className='font-heading lg:text-5xl text-center text-white  text-2xl lg:mt-20'>
                    SPEAKER
                </p>
                <KeynoteSpeakerCard />
            
            <div className="lg:py-12 py-4">
            <p className='font-heading lg:text-5xl text-center text-white lg:pb-20  text-2xl pb-10'>
                    PARTNERS
                </p>
                <Carousel />
            </div>
            <main className="lg:mb-2 mb-16">
                <Timeline workshops={workshops} />
            </main>

            <div className='lg:py-12 lg:mb-6'>
            <p className='font-heading lg:text-5xl text-center text-white lg:pb-5 my-1 text-2xl'>
                    HACKATHON
                </p>

            <HackathonCard />
            </div>


        </div>
    )
}

export default Home
