
import './NavBar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
const Navbar = () => {
  const [menu,setMenu] =useState("home");
  return (
    <div className='navbar'><img className="logoClass" src={assets.logo} alt="not found" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Track Progress</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>DashBoard</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Apply for NOC</li>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          
        </div> */}
        <button>Sign in</button>
      </div>
    </div>
  )
}

export {Navbar}