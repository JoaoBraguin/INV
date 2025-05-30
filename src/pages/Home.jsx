import Header from "../components/Header";
import style from '../styles/Home.module.css'
import quadraHome from '../images/quadraHome.png'
import Footer from "../components/footer";
import munhequeira from '../images/munhequeira.png'
import tenis1 from '../images/tenis1.png'
import camisalakers from '../images/camisalakers.png'
import pulseira from '../images/Pulseira.png'
import Pulseira from '../images/Pulseira.png'
import kneebrace from '../images/kneebrace.png'
import camisachicago from '../images/camisachicago.png'
import camisatiffany from '../images/camisatiffany.png'
import camisaceltics from '../images/camisaceltics.png'
import especialquadra from '../images/especialquadra.png'
import tenislebron from '../images/tenislebron.png'


export default function Home() {
  return (
    <>
      <Header />
      <div>
        <img className={style.homeimg} src={quadraHome} alt="" />
      </div>
      <section className={style.cardespecial}>
        <div className={style.card1}>
          <div>
            <img src={munhequeira} alt="" />
            <h2>wrist brace</h2>
            <h6>INV</h6>
            <hr />
            <p>9.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={tenis1} alt="" />
            <h2>Basketball Shoes</h2>
            <h6>Own the Game 3 -Adidas</h6>
            <hr />
            <p>9.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={camisalakers} alt="" />
            <h2>T-Shirt Lakers</h2>
            <h6>Nike</h6>
            <hr />
            <p>9.99</p>
          </div>
        </div>
      </section>
         <h2 className={style.about}>Acessory</h2>
      <section className={style.cardsblack}>
        <div className={style.card1}>
          <div>
            <img src={munhequeira} alt="" />
            <h2>wrist brace</h2>
            <h6>INV</h6>
            <hr />
            <p>9.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={Pulseira} alt="" />
            <h2>Basketball Shoes</h2>
            <h6>Own the Game 3 -Adidas</h6>
            <hr />
            <p>9.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={kneebrace} alt="" />
            <h2>T-Shirt Lakers</h2>
            <h6>Nike</h6>
            <hr />
            <p>9.99</p>
          </div>
        </div>
      </section>
      <h2 className={style.about}>T-Shirt</h2> <hr />
      <section className={style.cards}>
        <div className={style.card1}>
          <div>
            <img src={camisachicago} alt="" />
            <h2>wrist brace</h2>
            <h6>INV</h6>
            <hr />
            <p>9.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={camisatiffany} alt="" />
            <h2>Basketball Shoes</h2>
            <h6>Own the Game 3 -Adidas</h6>
            <hr />
            <p>9.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={camisaceltics} alt="" />
            <h2>T-Shirt Lakers</h2>
            <h6>Nike</h6>
            <hr />
            <p>9.99</p>
          </div>
        </div>
      </section>
      <div className={style.special}>
        <h1>Special</h1>
      </div>
      <div className={style.card2}>
        <img src={tenislebron} alt="" />
        <h2>Shoes of Lebron</h2>
        <h6>Nike - INV</h6>
        <hr />
        <p>$300,99</p>
      </div>

      <div>
        <img className={style.especialimg} src={especialquadra} alt="" />
      </div>



      <Footer />
    </>
  );
}
