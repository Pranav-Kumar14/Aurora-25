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
            <div className='mt-8 py-12'>
                <KeynoteSpeakerCard />
            </div>
            <div className="mt-6 py-12">
                <img src={partners} alt="partners" className="w-1/4 py-8 mx-auto" />
                <MediaSlider />
            </div>
            <div className="py-12">
                <img src={workshopsImg} alt="workshops" className="w-1/4 py-8 mx-auto" />
                <Carousel />
            </div>
            <main className="min-h-screen ">
                <Timeline workshops={workshops} />
            </main>

            <div className='py-12 mb-6'>
            <img src={hackathon} alt="hackathon" className="w-1/4 py-8 mx-auto" />

<HackathonCard />
            </div>


        </div>
    )
}

export default Home
