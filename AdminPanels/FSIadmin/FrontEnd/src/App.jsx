import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "./Components/NavBar/NavBar"
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import LoginPopup from './Components/LoginPopup/Loginpopup'
import Footer from './Components/Footer/Footer'
import { useState } from "react"
import {Schedule} from './Pages/Schedule/Schedule';

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup/>:<></>}
    <div className='app'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Schedule" element={<Schedule/>}/>
    </Routes>
    </div> 
    </>
  )
}

export default App