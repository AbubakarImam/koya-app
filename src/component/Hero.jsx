import { useState } from "react";
import image from '../assets/phonegroup.png'
import WhitelistModal from './WhitelistModal';
function HeroSection() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between md:px-20">
            <div className="md:w-1/2 w-4/5">
                <p className="text-lg md:text-4xl font-bold font-poppins text-white mb-6">
                    Discover a world of knowledge,
                    growth, and connection on Koya,
                    the premier learning platform
                    designed to empower learners
                    like you.
                </p>
                <button
                    onClick={openModal}
                    className="px-2 py-1 md:px-6 md:py-3 md:text-xl bg-white text-[#052570] rounded-[35px] hover:bg-blue-600">
                    Get Whitelisted
                </button>
            </div>
            <div className="md:w-1/2 hidden">
                <img
                    src={image}
                    alt="First Image"
                    className="w-1/2"
                />
            </div>
            {isModalOpen && <WhitelistModal onClose={closeModal} />}
        </div>
    );
}

export default HeroSection;
