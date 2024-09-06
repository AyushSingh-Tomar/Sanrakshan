import React , {useState} from "react"
import './Loginpopup.css';
import logo from '../../assets/logo.png';

const Loginpopup = ({ toggleDialog }) => {
  const [isSignup, setIsSignup] = useState(true); 

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (

       <div className="overlay">
          <div className="signup-dialog">
          <span onClick={toggleDialog} className="close-btn">&times;</span>
          <img src={logo} alt="Logo" className="logo" />
          <div></div>
          <h2>{isSignup ? 'Signup Now': 'Login Now'}</h2>


        <div className="toggle-container">
          <button
            className={`toggle-btn ${isSignup ? 'active' : ''}`}
            onClick={() => setIsSignup(true)}
          >
            Sign Up
          </button>
          <button
            className={`toggle-btn ${!isSignup ? 'active' : ''}`}
            onClick={() => setIsSignup(false)}
          >
            Log In
          </button>
        </div>
        {isSignup ? (
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Role" required />
              <input type="password" placeholder="Password" required />
              <button className="sub" type="submit">Submit</button>
            </form>
        ) : (
          <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="sub" type="submit">Submit</button>
        </form>
        )}
           
          </div>
        </div>
  
  )
}

export default Loginpopup