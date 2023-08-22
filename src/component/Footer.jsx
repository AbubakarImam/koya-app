import logo from "../assets/koyalogo.svg"
import { FaTwitterSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="">
            {/* <div className="w-1/12 bg-[#052570] p-2 h-[10.6rem] rounded-tl-2xl"></div> */}
            <div className="min-w-screen flex flex-col-reverse md:flex-row items-center justify-between p-10 bg-[#052570] rounded-tl-[5rem]">
                {/* Left Section */}
                <div className="flex flex-col items-start justify-start">
                    <img src={logo} alt="Logo" className="h-full w-full mb-6" />
                    <span className="text-white text-sm text-left">&copy; Your Company 2023</span>
                </div>

                {/* Middle Section (Quick Access Links) */}
                <div className="flex md:flex-col items-baseline mb-2 justify-evenly md:items-start text-white space-x-2 md:space-y-2">
                    <h6 className="font-inter text-xl font-bold">Quick Links:</h6>
                    <a href="#" className="text-white text-sm hover:text-gray-500">About Koya</a>
                    <a href="#" className="text-white text-sm hover:text-gray-500">Resources</a>
                    <a href="#" className="text-white text-sm hover:text-gray-500">Tools</a>
                </div>

                {/* Right Section (Social Links) */}
                <div className="flex flex-col items-start text-white space-y-4">
                    <h6 className="text-xl font-bold font-inter">Social</h6>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white text-4xl">
                            <FaTwitterSquare />
                        </a>
                        <a href="#" className="text-white text-4xl">
                            <FaTelegram />
                        </a>
                        <a href="#" className="text-white text-4xl">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-white text-4xl">
                            <GrFacebook />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
