import products from '../images/products.png'
import products2 from '../images/products2.png'
import products3 from '../images/products3.png'
import Header from "../components/Header";
import style from '../styles/Produtos.module.css'
import Footer from "../components/footer";
import munhequeira from '../images/munhequeira.png'
import tenis1 from '../images/tenis1.png'
import camisalakers from '../images/camisalakers.png'
import Pulseira from '../images/Pulseira.png'
import kneebrace from '../images/kneebrace.png'
import camisachicago from '../images/camisachicago.png'
import camisatiffany from '../images/camisatiffany.png'
import camisaceltics from '../images/camisaceltics.png'
import dentadura from '../images/dentadura.png'
import protecaojoelho from '../images/protecaojoelho.png'
import mochilainv from '../images/mochilainv.png'
import camisamiami from '../images/camisamiami.png'
import camisaallstarts from '../images/camisallstarts.png'
import lebronwitness from '../images/lebronwitness.png'
import airjordanxxx from '../images/airjordanxxx.png'
import sixstreetcharge from '../images/sixstreetcharge.png'
import airjordanblueprint from '../images/airjordanblueprint.png'
import kdsunrise from '../images/kdsunrise.png'
import shortschicago from '../images/shortschicago.png'
import shortsphilladelphia from '../images/shortsphilladelphia.png'
import shortslakers from '../images/shortslakers.png'
import shortsbrolkyn from '../images/shortsbrolkyn.png'
import shortsgoldenstate from '../images/shortsgoldenstate.png'
import shortsmiami from '../images/shortsmiami.png'
import protecaojoelho2 from '../images/protecaojoelho2.png'
import airjordanblueprint2 from '../images/airjordanblueprint2.png'
import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import EditarProduto from './EditarProduto';






export default function Produtos() {

  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');

  const api = axios.create({
    baseURL: "http://localhost:3333"
  });

  useEffect(() => {
    api.get("/produtos")
      .then(res => setProdutos(res.data))
      .catch(err => console.log("Erro ao buscar os produtos", err));
  }, [api]);

  const produtosFiltrados = busca.trim()
    ? produtos.filter(produto =>
      produto.name.toLowerCase().includes(busca.toLowerCase())
    )
    : produtos;

  return (
    <>
      <div className={style.homeimg}>
        <img src={products3} alt="" />
      </div>
      <Header titulo="Products" />
      <div className={style.about2}>
        <hr /><h2>Acessory</h2> <hr />
      </div>

      <section className={style.cardespecial}>
        <div className={style.card1}>
          <img src={munhequeira} alt="" />
          <h2>wrist brace</h2>
          <div className={style.icone}>
            <h6>INV</h6> <FaRegEdit size={30} />
            <h5>Quantity : 19</h5>
          </div>
          <hr />
          <p>$ 9.99</p>
        </div>
        <div className={style.card1}>
          <div>
            <img src={Pulseira} alt="" />
            <h2>headband</h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 20</h5>
            </div>
            <hr />
            <p>$ 20.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={kneebrace} alt="" />
            <h2>knee brace</h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 7</h5>
            </div>
            <hr />
            <p>$ 13.99</p>
          </div>
        </div>
      </section>

      <section className={style.cardsblack}>
        <div className={style.card1}>
          <div>
            <img src={dentadura} alt="" />
            <h2>Mouthguard</h2>
            <div className={style.icone}>
              <h6>INV</h6> <FaRegEdit size={30} />
              <h5>Quantity : 35</h5>
            </div>
            <hr />
            <p>$ 5.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={protecaojoelho2} alt="" />
            <h2>Knee brace</h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 22</h5>
            </div>
            <hr />
            <p>$ 8.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={mochilainv} alt="" />
            <h2>Bag</h2>
            <div className={style.icone}>
              <h6>Tamark</h6> <FaRegEdit size={30} />
              <h5>Quantity : 40</h5>
            </div>
            <hr />
            <p>$ 13.99</p>
          </div>
        </div>
      </section>
      <div className={style.about}>
        <hr /><h2>T-Shirts</h2> <hr />
      </div>
      <section className={style.cards}>
        <div className={style.card1}>
          <div>
            <img src={camisachicago} alt="" />
            <h2>T-shirt Chicago</h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 12</h5>
            </div>
            <hr />
            <p>$ 220.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={camisatiffany} alt="" />
            <h2>T-shirt Tiffany</h2>
            <div className={style.icone}>
              <h6>Tiffany&Co</h6> <FaRegEdit size={30} />
              <h5>Quantity : 14</h5>
            </div>
            <hr />
            <p>$ 220.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={camisaceltics} alt="" />
            <h2>T-Shirt Celtics</h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 9</h5>
            </div>
            <hr />
            <p>$ 180.99</p>
          </div>
        </div>
      </section>

      <section className={style.cardsblack2}>
        <div className={style.card1}>
          <div>
            <img src={camisalakers} alt="" />
            <h2>T-shirt Lakers</h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 4</h5>
            </div>
            <hr />
            <p>$ 200.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={camisamiami} alt="" />
            <h2>T-shirt Miami</h2>
            <div className={style.icone}>
              <h6>Tiffany&Co</h6> <FaRegEdit size={30} />
              <h5>Quantity : 5</h5>
            </div>
            <hr />
            <p>$ 200.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={camisaallstarts} alt="" />
            <h2>T-shirt All-Star</h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 17</h5>
            </div>
            <hr />
            <p>$ 220.99</p>
          </div>
        </div>
      </section>
      <div className={style.about}>
        <hr /><h2>Shoes</h2> <hr />
      </div>
      <section className={style.cards2}>
        <div className={style.card1}>
          <div>
            <img src={tenis1} alt="" />
            <h2>Basketball Shoes</h2>
            <div className={style.icone}>
              <h6>Own the Game 3 -Adidas</h6> <FaRegEdit size={30} />
              <h5>Quantity : 3</h5>
            </div>
            <hr />
            <p>$ 88.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={airjordanxxx} alt="" />
            <div className={style.icone}>
              <h2>Air Jordan XXXVII</h2> <FaRegEdit size={30} />
              <h5>Quantity : 4</h5>
            </div>
            <h6>Nike</h6>
            <hr />
            <p>$ 95.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={lebronwitness} alt="" />
            <h2>Lebron Witness VII</h2>
            <div className={style.icone}>
              <h6>73 ANUAL</h6> <FaRegEdit size={30} />
              <h5>Quantity : 8</h5>
            </div>
            <hr />
            <p>$ 100.99</p>
          </div>
        </div>
      </section>
      <section className={style.cardsblack}>
        <div className={style.card1}>
          <div>
            <img src={sixstreetcharge} alt="" />
            <h2>Six Street Charge</h2>
            <div className={style.icone}>
              <h6>Six Street</h6> <FaRegEdit size={30} />
              <h5>Quantity : 10</h5>
            </div>
            <hr />
            <p>$ 80.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={airjordanblueprint2} alt="" />
            <h2>Air Jordan Blueprint </h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 12</h5>
            </div>
            <hr />
            <p>$ 90.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={kdsunrise} alt="" />
            <h2>KD 17 Sunrise </h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 8</h5>
            </div>
            <hr />
            <p>$ 100.99</p>
          </div>
        </div>
      </section>
      <div className={style.about}>
        <hr /><h2>Shorts</h2> <hr />
      </div>
      <section className={style.cards}>
        <div className={style.card1}>
          <div>
            <img src={shortschicago} alt="" />
            <h2>Shorts Chicado Bulls</h2>
            <div className={style.icone}>
              <h6>INV</h6> <FaRegEdit size={30} />
              <h5>Quantity : 6</h5>
            </div>
            <hr />
            <p>$ 40.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={shortsphilladelphia} alt="" />
            <h2>Shorts Philladelphia</h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 12</h5>
            </div>
            <hr />
            <p>$ 40.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={shortslakers} alt="" />
            <h2>Shorts Lakers</h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 18</h5>
            </div>
            <hr />
            <p>$ 40.99</p>
          </div>
        </div>
      </section>
      <section className={style.cardsblack2}>
        <div className={style.card1}>
          <div>
            <img src={shortsbrolkyn} alt="" />
            <h2>Shorts Brolkyn </h2>
            <div className={style.ico}>
              <h6>INV</h6> <FaRegEdit size={30} />
              <h5>Quantity : 20</h5>
            </div>
            <hr />
            <p>$ 40.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={shortsgoldenstate} alt="" />
            <h2>Shorts Warriors</h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 30</h5>
            </div>
            <hr />
            <p>$ 40.99</p>
          </div>
        </div>
        <div className={style.card1}>
          <div>
            <img src={shortsmiami} alt="" />
            <h2>Shorts Miami Heat</h2>
            <div className={style.icone}>
              <h6>Nike</h6> <FaRegEdit size={30} />
              <h5>Quantity : 16</h5>
            </div>
            <hr />
            <p>$ 40.99</p>
          </div>
        </div>
      </section>


      <a className={style.bot} href='/cadastrar-produto' > <FaPlusCircle className={style.svg2} size={15} /> Adicionar Produto</a>



      <Footer />
    </>
  );
}