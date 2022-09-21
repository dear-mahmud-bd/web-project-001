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
import RequireAuth from './components/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyAppoitments from './components/Pages/Dashboard/MyAppoitments';
import MyReview from './components/Pages/Dashboard/MyReview';
import Users from './components/Pages/Dashboard/Users';
import RequireAdmin from './components/RequireAuth/RequireAdmin';
import AddDoctor from './components/Pages/Dashboard/AddDoctor';
import ManageDoctor from './components/Pages/Dashboard/ManageDoctor';
import Payment from './components/Pages/Dashboard/Payment';

function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/appointment" element={<RequireAuth><Appointment /></RequireAuth>} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<MyAppoitments />} />
            <Route path="review" element={<MyReview />} />
            <Route path="payment/:appointmentId" element={<Payment />} />

            {/* Require Admin Path */}
            <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>} />
            <Route path="add-doctor" element={<RequireAdmin><AddDoctor /></RequireAdmin>} />
            <Route path="manage-doctor" element={<RequireAdmin><ManageDoctor /></RequireAdmin>} />
          </Route>

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </section>
      <ToastContainer position="top-center"></ToastContainer>
    </main>
  );
}

export default App;
