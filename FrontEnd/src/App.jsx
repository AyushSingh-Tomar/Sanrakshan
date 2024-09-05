import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import TrackProgress from "./Pages/TrackProgress/TrackProgress";
import DashBoard from "./Pages/DashBoard/DashBoard";
import ApplyNOC from "./Pages/ApplyNOC/ApplyNOC";
import LoginPopup from "./Components/LoginPopup/Loginpopup";
import Footer from "./Components/Footer/Footer";
import Form from "/Components/Form/Form";
import DashBoard from "./Components/Dashboard/Dashboard";
import { useState } from "react";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup /> : <></>}
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/trackProgress" element={<TrackProgress />} />
          <Route path="/applynoc" element={<ApplyNOC />} />
          <Route path="/form" element={<Form />} />
          <Route path="/DashBoard" element={<DashBoard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
