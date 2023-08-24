import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'

const Faqs = () => {
    const faqsList = [
        {
            q: "Im New To Crypto. How do i Start?",
            a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit magni culpa ex placeat illum! Iste dicta deserunt amet mollitia?",
            href: "javascript:void(0)",
        },
        {
            q: "How do i earn by using KOYA App?",
            a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit magni culpa ex placeat illum! Iste dicta deserunt amet mollitia?",
            href: "javascript:void(0)",
        },
        {
            q: "What is KOT point ?",
            a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit magni culpa ex placeat illum! Iste dicta deserunt amet mollitia?",
            href: "javascript:void(0)",
        },
        {
            q: "What can i do with KOT point?",
            a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit magni culpa ex placeat illum! Iste dicta deserunt amet mollitia?",
            href: "javascript:void(0)",
        },
        {
            q: "Can i get free market insight on KOYA?",
            a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit magni culpa ex placeat illum! Iste dicta deserunt amet mollitia?",
            href: "javascript:void(0)",
        },
        {
            q: "How can i download the KOYA App?",
            a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit magni culpa ex placeat illum! Iste dicta deserunt amet mollitia?",
            href: "javascript:void(0)",
        }
    ];

    const [openIndex, setOpenIndex] = useState(-1);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faqs" className='py-14 max-w-4xl mx-auto my-16'>
            <div className="w-full mx-auto px-4 md:px-8">
                <div className="space-y-5 text-center mx-auto">
                    <h3 className="text-white font-poppins font-extrabold text-4xl">
                        Frequently Ask Question
                    </h3>
                </div>
                <div className='mt-12 px-10'>
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center bg-white px-4 font-poppins py-4 rounded-md justify-between font-semibold text-[#052570] cursor-pointer"
                                    onClick={() => toggleAnswer(idx)} // Toggle answer on click
                                >
                                    {item.q}
                                    <IoIosArrowDown />
                                </summary>
                                {openIndex === idx && (
                                    <p
                                        dangerouslySetInnerHTML={{ __html: item.a }}
                                        className='text-gray-600 leading-relaxed'
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Faqs;
