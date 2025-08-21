import Header from "../components/Header";
import style from '../styles/Home.module.css'
import quadraHome from '../images/quadraHome.png'
import Footer from "../components/footer";
import munhequeira from '../images/munhequeira.png'
import tenis1 from '../images/tenis1.png'
import camisalakers from '../images/camisalakers.png'
import Pulseira from '../images/Pulseira.png'
import kneebrace from '../images/kneebrace.png'
import camisachicago from '../images/camisachicago.png'
import camisatiffany from '../images/camisatiffany.png'
import camisaceltics from '../images/camisaceltics.png'
import especialquadra from '../images/especialquadra.png'
import tenislebron from '../images/tenislebron.png'

import { FaRegEdit } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <div>
        <img className={style.homeimg} src={quadraHome} alt="" />
      </div>
      <Header titulo="Home" />
      <div className={style.about2}>
        <h2>New</h2> <hr /> <a href="/produtos">View All</a>
        <FaRegEdit size={30} />
      </div>
      <section className={style.cardespecial}>
        <div className={style.card1}>
          <div>
            <img src={munhequeira} alt="" />
            <h2>wrist brace</h2>
            <h6>INV</h6> <FaRegEdit size={30} />
            <h5>Quantity : 19</h5>
            <hr />
            <p>$ 9.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={tenis1} alt="" />
            <h2>Basketball Shoes</h2>
            <h6>Own the Game 3 -Adidas</h6> <FaRegEdit size={30} />
            <h5>Quantity : 3</h5>
            <hr />
            <p>$ 88.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={camisalakers} alt="" />
            <h2>T-Shirt Lakers</h2>
            <h6>Nike</h6> <FaRegEdit size={30} />
            <h5>Quantity : 4</h5>
            <hr />
            <p>$ 200.99</p>
          </div>
        </div>
      </section>
      <div className={style.about2}>
        <h2>Acessory</h2> <hr /> <a href="/produtos">View All</a>
      </div>
      <section className={style.cardsblack}>
        <div className={style.card1}>
          <div>
            <img src={munhequeira} alt="" />
            <h2>wrist brace</h2>
            <h6>INV</h6> <FaRegEdit size={30} />
            <h5>Quantity : 19</h5>
            <hr />
            <p>$ 9.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={Pulseira} alt="" />
            <h2>Basketball Shoes</h2>
            <h6>Own the Game 3 -Adidas</h6> <FaRegEdit size={30} />
            <h5>Quantity : 19</h5>
            <hr />
            <p>$ 9.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={kneebrace} alt="" />
            <h2>T-Shirt Lakers</h2>
            <h6>Nike</h6> <FaRegEdit size={30} />
            <h5>Quantity : 19</h5>
            <hr />
            <p>$ 9.99</p>
          </div>
        </div>
      </section>
      <section className={style.cardespecial2}>
        <div className={style.about3}>
           <h2>Acessory</h2> <hr /><a href="/produtos">View All</a>
        </div>
        <div className={style.container}>
          <div className={style.card3}>
            <div>
              <img src={camisachicago} alt="" />
              <h2>wrist brace</h2>
              <h6>INV</h6> <FaRegEdit size={30} />
              <h5>Quantity : 19</h5>
              <hr />
              <p>$ 9.99</p>
            </div>
          </div>
          <div className={style.card3}>
            <div>
              <img src={camisatiffany} alt="" />
              <h2>Basketball Shoes</h2>
              <h6>Own the Game 3 -Adidas</h6> <FaRegEdit size={30} />
              <h5>Quantity : 19</h5>
              <hr />
              <p>$ 9.99</p>
            </div>
          </div>
          <div className={style.card3}>
            <div>
              <img src={camisaceltics} alt="" />
              <h2>T-Shirt Lakers</h2>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 19</h5>
              <hr />
              <p>$ 9.99</p>
            </div>
          </div>
        </div>
      </section>
      <section className={style.shoeslebron}>
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
        <div className={style.especialimg}>
          <img src={especialquadra} alt="" />
        </div>
      </section>



      <Footer />
    </>
  );
}