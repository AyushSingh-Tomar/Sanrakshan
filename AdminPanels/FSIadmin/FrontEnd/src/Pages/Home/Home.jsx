import { Header } from '../../Components/Header/Header'
import './Home.css'
import { assets } from '../../assets/assets'
import { CardTab } from '../../Components/Card/Card'
const Home = () => {
  return (
    <div>
      <Header/>
      <div className="slogan">
          <div className="slogan-left">
            <h2>Be prepared </h2>
            <h2>Be safe !</h2>
          </div>
          <div className="slogan-right">
            <img src={assets.besafe} alt="be safe" />
          </div>
        </div>
        <div className="CardFrame">
          <h2>Guide Lines</h2>
        <div className="cardHolder">
          <CardTab/>
          <CardTab/>
          <CardTab/>
        </div>
        <div className="cardHolder">
          <CardTab/>
          <CardTab/>
          <CardTab/>
        </div>
        </div>
    </div>
  )
}

export default Home