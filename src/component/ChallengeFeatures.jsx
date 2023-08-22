import challengeone from "../assets/union.png";
import challengetwo from "../assets/challengetwo.png";
import { Link } from "react-router-dom";

const ChallengeFeatures = () => {
    const challenges = [
        {
            id: 1,
            img: challengeone,
            users: "2,772",
            number: 53,
            text: "NEAR PROTOCOL | Getting Started with Near Blockchain",
        },
        {
            id: 2,
            img: challengetwo,
            users: "563",
            number: 5,
            text: "AURORA BLOCKCHAIN | Getting Started with Aurora",
        },
    ];

    return (
        <section className="flex flex-col max-w-4xl mx-auto space-y-4 mt-4">
            <h2 className="text-white font-inter font-medium text-5xl ml-8 mb-5">Challenges</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                {challenges.map(({ id, img, users, number, text }) => {
                    return (
                        <div
                            key={id}
                            className="rounded-[2.5rem] w-full md:w-1/2 overflow-hidden bg-[#052570] px-5 py-6"
                        >
                            <div className="h-3/5 w-full relative">
                                <img src={img}
                                    alt="img"
                                    className="w-full h-full object-fit" />
                                <span className="absolute bottom-2 left-4 rounded-lg bg-[#010F2A] px-4 py-1 text-white">
                                    <span className="inline-block w-2 h-2 bg-[#FBFF3B] rounded-full mr-2"></span>
                                    <p className="text-[#FBFF3B] inline-block">{users}</p> users
                                </span>
                            </div>
                            <div className="h-2/5 w-full py-4 px-4">
                                <div className="text-left  text-white text-3xl">
                                    <p className="mb-4">{number} Challenges</p>
                                    <h4 className="font-semibold">{text}</h4>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button
                className="text-white px-4 py-2 border border-white rounded-md mt-8 mx-auto w-1/3">
                <Link to="/challenge">See More</Link>
            </button>
        </section>
    );
};

export default ChallengeFeatures;
