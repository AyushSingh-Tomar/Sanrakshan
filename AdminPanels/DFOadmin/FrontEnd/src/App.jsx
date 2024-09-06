import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "./Components/NavBar/NavBar"
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import TrackProgress from './Pages/TrackProgress/TrackProgress'
import DashBoard from './Components/Dashboard/Dashboard';
import ApplyNOC from './Pages/ApplyNOC/ApplyNOC'
import LoginPopup from './Components/LoginPopup/Loginpopup'
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer'
import { useState } from "react"

const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  const toggleLoginPopup = () => {
    setShowLogin(!showLogin);
  };


  return (
    <>
    {/* {showLogin?<LoginPopup/>:<></>} */}
    {showLogin && <LoginPopup toggleDialog={toggleLoginPopup}/>} 
    <div className='app'>
    <Navbar toggleLoginPopup={toggleLoginPopup}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="/request" element={<TrackProgress/>}/>
      <Route path="/Form" element={<Form/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}


export default App