import { useState } from "react";
import logo from '../assets/koyalogo.svg'
const Navbar = () => {

    const [state, setState] = useState(false)


    const navigation = [
        { title: "About", path: "#faqs" },
        { title: "FAQs", path: "#faqs" },
    ];

    const handleGetAppClick = () => {
        // Detect the user's device operating system
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(userAgent)) {
            // User is on an iOS device, redirect to the Apple App Store
            window.location.href = "https://apps.apple.com/us/app/your-ios-app-id";
        } else if (/android/.test(userAgent)) {
            // User is on an Android device, redirect to Google Play Store
            window.location.href = "https://play.google.com/store/apps/details?id=com.yourapp.package";
        } else {
            // Handle other devices or scenarios
            alert("App not available for your device.");
        }
    };


    return (
        <header className={`pb-5 md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
            <div className="md:items-center justify-between flex flex-col md:flex-row px-4 py-2 max-w-screen-xl mx-auto md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <a href="/">
                        <img
                            src={logo} className=''
                            width={120}
                            height={50}
                            alt="logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0  ${state ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row justify-end md:items-center space-y-2 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-white hover:text-indigo-600">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                                <button
                                    onClick={handleGetAppClick}
                                    className="block py-3 px-4 font-medium text-center text-white bg-[#052570] hover:bg-indigo-500
                                     active:bg-indigo-700 active:shadow-none rounded shadow md:inline"
                                >
                                    Get App
                                </button>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar;