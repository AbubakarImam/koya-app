import challengeone from "../assets/challengeone.png";
import challengetwo from "../assets/challengetwo.png";
import challengethree from "../assets/challengethree.png";
import { Link } from "react-router-dom";

const ChallengeFeatures = () => {
    const challenges = [
        {
            id: 1,
            img: challengeone,
            users: "1,446",
            number: "53 Challenges",
            text: "NEAR PROTOCOL BOS | Getting Started with Blockchain Operating System",
        },
        {
            id: 2,
            img: challengetwo,
            users: "2,227",
            number: "75 Challenges",
            text: "AURORA BLOCKCHAIN | Getting Started with Aurora",
        },
        {
            id: 3,
            img: challengethree,
            users: "1,446",
            number: "22 Challenges",
            text: "Getting Started with ARCHWAY",
        },
    ];

    return (
        <section className="flex flex-col max-w-6xl mx-auto space-y-4 mt-4">
            <h2 className="text-white font-inter font-medium text-2xl md:text-5xl ml-8 mb-5">Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-10">
                {challenges.map(({ id, img, users, number, text }) => {
                    return (
                        <Link to="/challenge"
                            key={id}
                            className="overflow-hidden rounded-3xl bg-[#052570] space-y-4 px-4 py-2 
                            hover:shadow-md transition-transform transform hover:scale-105"
                            style={{
                                width: '100%', // Set a fixed width
                                height: '100%', // Set a fixed height
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div className="h-3/5 w-full relative">
                                <img src={img}
                                    alt="img"
                                    className="w-full h-full object-fit" />
                                <span className="absolute bottom-1 left-2 md:bottom-1 md:left-4 rounded-lg bg-[#010F2A] px-4 py-1 text-[10px] text-white">
                                    <span className="inline-block w-2 h-2 bg-[#FBFF3B] rounded-full mr-2"></span>
                                    <p className="text-[#FBFF3B] inline-block">{users}</p> users
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
            <button
                className="text-white px-4 py-2 border border-white rounded-md mt-8 mx-auto w-1/3">
                <Link to="/challenge">See More</Link>
            </button>
        </section>
    );
};

export default ChallengeFeatures;
