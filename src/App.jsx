import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Event from "./pages/Event";
import Challenges from "./pages/Challenges"
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/event" element={<Event />}></Route>
          <Route path="/challenge" element={<Challenges />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App