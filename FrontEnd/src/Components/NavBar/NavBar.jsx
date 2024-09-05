
import './NavBar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = ({ toggleLoginPopup }) => {
  const [menu,setMenu] =useState("home");
  return (
    <div className='navbar'>
      <img className="logo" src={assets.logo} alt="not found" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>  <Link to="/">Home</Link> </li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>  <Link to="/trackprogress">Track Progress</Link> </li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>  <Link to="dashboard">DashBoard</Link> </li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>  <Link to="applynoc">Apply for NOC</Link> </li>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          
        </div> */}
        <button onClick={toggleLoginPopup}>Sign in</button>
        <button onClick={toggleLoginPopup}>Login</button>
      </div>
    </div>
  )
}


export {Navbar}
