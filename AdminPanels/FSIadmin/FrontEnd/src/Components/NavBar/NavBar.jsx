
import './NavBar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu,setMenu] =useState("home");
  return (
    <div className='navbar'>
      <img className="logo" src={assets.logo} alt="not found" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>  <Link to="/">Home</Link> </li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>  <Link to="/Schedule">Schedule</Link> </li>
       
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          
        </div> */}
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export {Navbar}
