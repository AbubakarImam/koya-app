const ContactModal = () => {
    return (
        <section className="py-14 bg-white mb-10">
            <div className="max-w-4xl mx-auto  px-4 md:px-8">
                <div className="max-w-lg mx-auto space-y-8 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-800 text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
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
                                name="email"
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

export default ContactModal;
