import Hero from '../components/Hero'
import CountdownTimer from '../components/CountdownTimer'
import KeynoteSpeakerCard from '../components/Keynote_card'
import hackathon from '../images/HACKATHON.png'
import partners from '../images/PARTNERS.png'
import workshops from '../images/WORKSHOPS.png'
import HackathonCard from '../components/Hackathon_card'
import Carousel from '../components/Carousel'
import InfiniteCarousel from '../components/slider'

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
                <InfiniteCarousel />
            </div>
            <div className="py-12">
                <img src={workshops} alt="workshops" className="w-1/4 py-8 mx-auto" />
                <Carousel />
            </div>

            <div className='py-12 mb-6'>
            <img src={hackathon} alt="hackathon" className="w-1/4 py-8 mx-auto" />

<HackathonCard />
            </div>


        </div>
    )
}

export default Home
