import Hero from '../components/Hero'
import CountdownTimer from '../components/CountdownTimer'
import KeynoteSpeakerCard from '../components/Keynote_card'
// import hackathon from '../images/HACKATHON.png'
// import partners from '../images/PARTNERS.png'
// import workshops from '../images/WORKSHOPS.png'
import HackathonCard from '../components/Hackathon_card'
import Carousel from '../components/Carousel'
import InfiniteCarousel from '../components/slider'

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-[#0f0d39] to-[#201867]">
            <Hero />
            <CountdownTimer targetDate={new Date("2025-01-23T00:00:00")} />
            <KeynoteSpeakerCard />

            <img src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/PARTNERS_gc9fr3.png" alt="partners" className="w-1/4 py-8 mx-auto" />
            <InfiniteCarousel />

            <img src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121212/WORKSHOPS_z6flht.png" alt="workshops" className="w-1/4 py-8 mx-auto" />
            <Carousel />

            <img src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121211/HACKATHON_hgdggn.png" alt="hackathon" className="w-1/4 py-8 mx-auto" />

            <HackathonCard />

        </div>
    )
}

export default Home
