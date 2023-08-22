import HeroSection from "../component/Hero";
import ChallengeFeatures from "../component/ChallengeFeatures";
import EventFeatures from "../component/EventFeatures";
import Brands from "../component/Brands";
import Faqs from "../component/Faqs";
const Home = () => {
    return (
        <div className="px-4 py-8 md:p-10 max-w-6xl md:mx-auto">
            <HeroSection />
            <ChallengeFeatures />
            <EventFeatures />
            <Brands />
            <Faqs />

        </div>
    )
}

export default Home;