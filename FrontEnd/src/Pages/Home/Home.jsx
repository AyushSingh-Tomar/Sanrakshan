import { Header } from '../../Components/Header/Header'
import './Home.css'
import { assets } from '../../assets/assets'
import { CardTab } from '../../Components/Card/Card'
import Rendercard from '../../Components/Card/RenderCard'
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
        <br/>
        </div>
        <div className="CardFrame">
          <h2>Guide Lines</h2>
        <div className="cardHolder">
          <Rendercard/>
        </div>
        </div>
    </div>
  )
}

export default Home
