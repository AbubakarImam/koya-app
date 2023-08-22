import { FaApple } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs"
import pattern from "../assets/pattern.jpg";
import image from "../assets/phonegroupthree.png"


const Challenges = () => {
    const sectionStyle = {
        backgroundImage: `url(${pattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div>
            <section className="py-14" style={sectionStyle}>
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-lg mx-auto text-center">
                        <h4 className="text-white py-2 px-4 border border-white rounded-lg inline-block mb-4 text-xl font-semibold">
                            CHALLENGE
                        </h4>
                        <blockquote>
                            <p className="text-white text-2xl font-normal font-inter">
                                Challenge yourself with our interactive and engaging learning challenges, from building widgets
                                to components at the top of bOS, and other learning objectives. Sharpen your skills in building
                                on BOS, expand your knowledge, and push the boundaries of your capabilities.
                                You earn rewards and points when you complete challenges and demonstrate your skills.

                            </p>
                        </blockquote>
                    </div>
                </div>
            </section>
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-lg mx-auto px-8 space-y-10 text-center text-white">
                        <div className="">
                            <img src={image} alt="" />
                        </div>
                        <h3 className="text-3xl font-semibold sm:text-4xl">
                            Download the App
                        </h3>
                        <p className="mt-3">
                            Unveil the global leaders in blockchain and delve into their pioneering capabilities from your phone.
                        </p>
                        <div className="flex gap-3 items-center mt-4 md:justify-center">
                            <a
                                href="https://apps.apple.com/us/app/your-app-name/id123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white px-4 py-2 rounded-lg flex items-center space-x-2 border border-white"
                            >
                                <FaApple className="text-2xl" />
                                <div className="flex flex-col text-start">
                                    <span>Get it on</span>
                                    <span className="">Apple Store</span>
                                </div>
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.yourapp.package"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white px-4 py-2 rounded-lg flex items-center space-x-2 border border-white"
                            >
                                <BsGooglePlay className="text-2xl" />
                                <div className="flex flex-col text-start">
                                    <span>Get it on</span>
                                    <span className="">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Challenges