import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import TrackProgress from './Pages/TrackProgress/TrackProgress';
import DashBoard from './Pages/DashBoard/DashBoard';
import ApplyNOC from './Pages/ApplyNOC/ApplyNOC';
import LoginPopup from './Components/LoginPopup/Loginpopup';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

const App = () => {
  const [referenceId, setReferenceId] = useState('ref-1725605939080'); // Replace with dynamic value as needed
  const [showLogin, setShowLogin] = useState(false);

  // Function to toggle login popup visibility
  const toggleLoginPopup = () => setShowLogin(!showLogin);

  return (
    <>
      {showLogin && <LoginPopup />}
      <div className='app'>
        <Navbar toggleLoginPopup={toggleLoginPopup} /> {/* Pass function if needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/trackProgress" element={<TrackProgress referenceId={referenceId} />} />
          <Route path="/applynoc" element={<ApplyNOC />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
