import imageone from "../assets/eventone.png";
import imagetwo from "../assets/eventtwo.png";
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
    ];

    return (
        <section className="flex flex-col max-w-4xl mx-auto  space-y-4 mt-4">
            <h2 className="text-white font-inter font-medium text-2xl md:text-5xl ml-8 mb-5">Events</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                {events.map(({ id, img, users, number, text }) => {
                    return (
                        <div
                            key={id}
                            className="rounded-[2.5rem] w-full md:w-1/2 overflow-hidden bg-[#052570] px-5 py-6"
                        >
                            <div className="h-3/5 w-full relative">
                                <span className="absolute top-4 left-6 rounded-lg py-1 px-1 text-white bg-[#010F2A]">
                                    In-Person
                                </span>
                                <img src={img}
                                    alt="img"
                                    className="w-full h-full object-fit" />
                                <span className="absolute bottom-2 left-0 rounded-lg bg-[#010F2A] px-1 py-1 text-white text-xs">
                                    <span className="inline-block w-1 h-1 bg-[#FBFF3B] rounded-full mr-1"></span>
                                    <p className="text-[#FBFF3B] inline-block">{users}</p> people attending
                                </span>
                            </div>
                            <div className="h-2/5 w-full py-4 px-4">
                                <div className="text-left  text-white text-lg md:text-3xl">
                                    <p className="mb-4">{number}</p>
                                    <h4 className="font-semibold">{text}</h4>
                                </div>
                            </div>
                        </div>
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
