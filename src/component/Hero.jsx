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
        <div className="flex items-center max-w-3xl gap-2 justify-between mx-6 md:mx-auto mt-24 mb-10 md:mt-20">
            <div className="w-full">
                <p className="text-[15px] md:text-2xl text-left font-bold font-poppins text-white mb-6">
                    Discover a world of blockchain knowledge,
                    growth, and connection on Koya,
                    the premier learning platform
                    designed to empower learners
                    like you.
                </p>
                <button
                    onClick={openModal}
                    className="px-[4px] py-1 md:px-6 md:py-1 text-[12px] md:text-xl bg-white text-[#052570] rounded-[35px] hover:bg-blue-600">
                    Get Whitelisted
                </button>
            </div>
            <img
                src={image}
                alt="First Image"
                className="h-full w-2/6 md:flex md:items-end"
            />
            {isModalOpen && <WhitelistModal onClose={closeModal} />}
        </div>
    );
}

export default HeroSection;
