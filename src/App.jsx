import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Event from "./pages/Event";
import Challenges from "./pages/Challenges"
import Navbar from "./component/Header";
import Footer from "./component/Footer";
import Contact from "./pages/Contact"

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [showContactForm, setShowContactForm] = useState(false);

  // Function to toggle the contact form visibility
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <>
      <Router>
        <Navbar toggleContactForm={toggleContactForm} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/event" element={<Event toggleContactForm={toggleContactForm} />}></Route>
          <Route path="/contact" element={<Contact onClose={() => setShowContactForm(false)} />} ></Route>
          <Route path="/challenge" element={<Challenges />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App