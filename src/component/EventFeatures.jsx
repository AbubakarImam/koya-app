import imageone from "../assets/eventone.png";
import imagetwo from "../assets/eventtwo.png";
import imagethree from "../assets/eventthree.png";
import { Link } from "react-router-dom";
const EventFeatures = () => {
    const events = [
        {
            id: 1,
            img: imageone,
            users: "1,735",
            number: "11 Sep 2022  - 14 Sep 2022",
            text: "NEARCON Beta 2022 | NEARCON Week - Lisbon",
        },
        {
            id: 2,
            img: imagetwo,
            users: "1,735",
            number: "4 Jun 2023  - 4 June 2023",
            text: "Helsinki Web3 Conference Aurora - Helsinki, Finland ",
        },
        {
            id: 3,
            img: imagethree,
            users: "1,735",
            number: "11 Sep 2023 - 14 Sep 2023",
            text: "NEARCON Beta 2022 | NEARCON Week - Lisbon",
        },
    ];

    return (
        <section className="flex flex-col max-w-6xl mx-auto  space-y-4 mt-4">
            <h2 className="text-white font-inter font-medium text-2xl md:text-5xl ml-8 mb-5">Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-10">
                {events.map(({ id, img, users, number, text }) => {
                    return (
                        <Link to="/event"
                            key={id}
                            className="rounded-3xl overflow-hidden bg-[#052570] px-4 py-2
                            hover:shadow-md transition-transform transform hover:scale-105"
                            style={{
                                width: '100%', // Set a fixed width
                                height: '100%', // Set a fixed height
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div className="h-3/5 w-full relative">
                                <span className="absolute top-4 left-6 rounded-lg py-1 px-1 text-white bg-[#010F2A]">
                                    In-Person
                                </span>
                                <img src={img}
                                    alt="img"
                                    className="w-full h-full object-fit" />
                                <span className="absolute bottom-1 rounded-lg bg-[#D9D9D94A] px-1 py-1 text-white text-[10px]">
                                    <span className="inline-block w-1 h-1 bg-[#FBFF3B] rounded-full mr-1"></span>
                                    <p className="text-[#FBFF3B] inline-block">{users}</p> people attending
                                </span>
                            </div>
                            <div className="h-2/5 w-full pt-4 px-4">
                                <div className="text-left  text-white font-inter text-base">
                                    <p className="mb-4 font-normal">{number}</p>
                                    <h4 className="font-semibold">{text}</h4>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <button className="text-white px-4 py-2 border border-white rounded-md mt-8 mx-auto w-1/3">
                <Link to="/event">See More</Link>
            </button>
        </section>
    );
};

export default EventFeatures;
