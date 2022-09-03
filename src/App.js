import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Appointment from './components/Pages/Appointment/Appointment';
import Reviews from './components/Pages/Reviews/Reviews';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import LogIn from './components/Pages/LogIn/LogIn';
import Register from './components/Pages/Register/Register';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
