import { useRef } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const ContactModal = ({ onClose }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_4o6d5hr",
            "template_kdswonn",
            form.current,
            "PWmQMvHE84NaX66OO",
        ).then(
            (result) => {
                toast.success("You have succesfully contacted the Koya team");
                console.log(result.text);
            },
            (error) => {
                toast.error("Error encountered: " + error.text)
                console.log(error.text);
            }
        );

        e.target.reset();

        onClose();
    }

    return (
        <section className="py-14 bg-white mb-10">
            <div className="max-w-4xl mx-auto  px-4 md:px-8">
                <div className="max-w-lg mx-auto space-y-8 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-800 text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="user_fullname"
                                placeholder="Your name"
                                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-800 text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                placeholder="Your email address"
                                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-800 text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Your message"
                                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

ContactModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default ContactModal;
