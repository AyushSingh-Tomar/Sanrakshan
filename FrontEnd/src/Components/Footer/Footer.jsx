import './footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
          <div className="footer-content-left">
            <img className="logo" src={assets.logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fugiat molestiae aperiam dolore officiis. Voluptates possimus.
            </p>
            <div className="footer-social-icons">
              <img src={assets.phone} alt="HelpDesk" />
              <img src={assets.complaint} alt="complaint" />
              <img src={assets.mail} alt="mail" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>Fire Safety department</h2>
            <ul>
              <li>Home</li>
              <li>GuideLines</li>
              <li>Laws</li>
              <li>Insurance</li>
            </ul>
            </div>
          <div className="footer-content-right">
            <h2>SEEK HELP</h2>
            <ul>
              <li>0755 258 8877</li>
              <li>Firedet@gmail.com</li>
            </ul>
          </div>
      </div>
      <hr />
      <p className="footer-credits">
        Site developed and maintained by team  <i>THE SYNDICATE</i>
      </p>
    </div>
  )
}

export default Footer