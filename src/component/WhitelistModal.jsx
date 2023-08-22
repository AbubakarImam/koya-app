import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import { db } from "../firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';


function WhitelistModal({ onClose }) {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Save the email to Firestore
            await db.collection('emails').add({
                email: email,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            // Clear the email input
            setEmail('');

            // Close the modal when done.
            onClose();
        } catch (error) {
            // Handle errors if needed
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
                {/* Close button */}
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    onClick={onClose} // Attach the onClose function to close the modal
                >
                    <AiOutlineClose size={24} />
                </button>
                {/* Modal content */}
                <h2 className="text-xl font-semibold mb-4">Get Whitelisted</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="text-right">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

WhitelistModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default WhitelistModal;
