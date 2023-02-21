import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./About";
import Services from "./Service"
import Contact from "./Contact";
import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import LetMeet from "./Let'Meet";

function App() {
  
  return (
    <div className="App">
      <Router>
     <Navbar />
     
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/letmeet" element={<LetMeet/>} />
     </Routes>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;