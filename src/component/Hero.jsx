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
        <div className="flex items-center max-w-4xl gap-4 justify-between mx-auto">
            <div className="w-1/2">
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
            <div className="w-1/2 md:flex md:items-end">
                <img
                    src={image}
                    alt="First Image"
                    className="md:w-2/3 md:flex md:items-end md:justify-content-end"
                />
            </div>
            {isModalOpen && <WhitelistModal onClose={closeModal} />}
        </div>
    );
}

export default HeroSection;
