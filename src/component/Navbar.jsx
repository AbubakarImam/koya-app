import logo from '../assets/koyalogo.svg'
const Navbar = () => {

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
        <header className="border-b w-full md:static md:text-sm md:border-none">
            <div className="items-center px-4 py-2 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="#">
                        <img
                            src={logo} className='lightgray'
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
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