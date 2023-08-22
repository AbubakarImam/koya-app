import HeroSection from "../component/Hero";
import ChallengeFeatures from "../component/ChallengeFeatures";
import EventFeatures from "../component/EventFeatures";
import Brands from "../component/Brands";
import Faqs from "../component/Faqs";
const Home = () => {
    return (
        <div className="">
            <HeroSection />
            <ChallengeFeatures />
            <EventFeatures />
            <Brands />
            <Faqs />

        </div>
    )
}

export default Home;