import React , {useState} from "react"
import './Loginpopup.css';
import logo from '../../assets/logo.png';


const Loginpopup = ({ toggleDialog }) => {
  const [isSignup, setIsSignup] = useState(true); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setError('');
    const url = isSignup ? '/api/users/signup' : '/api/users/login';

    try {
      const response = await axios.post(url, formData);
     
     
      console.log('Success:', response.data);
      localStorage.setItem('token', response.data.token);
    
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Something went wrong');
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (

       <div className="overlay">
          <div className="signup-dialog">
          <span className="close-icon" onClick={toggleDialog}>&times;</span>
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
            <form onSubmit={handleSubmit}>
             <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="role"
              className="dropdown"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="clerical-staff">Clerical Staff</option>
              <option value="technical-assistant">Technical Assistant</option>
              <option value="fire-safety-inspector">Fire Safety Inspector</option>
              <option value="assistant-divisional-fire-officer">Assistant Divisional Fire Officer</option>
              <option value="station-fire-officer">Station Fire Officer</option>
              <option value="divisional-fire-officer">Divisional Fire Officer</option>
              <option value="deputy-chief-fire-officer">Deputy Chief Fire Officer</option>
              <option value="chief-fire-officer">Chief Fire Officer</option>
            </select>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button className="sub" type="submit" onSubmit={handleSubmit}>Submit</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          <button className="sub" type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
        )}

          </div>
        </div>
  
  )
}

export default Loginpopup