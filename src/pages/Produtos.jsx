import Header from "../components/Header"
import style from '../styles/Produtos.module.css'
import products from '../images/products.png'

export default function Produtos() {
  return (
    <>
       <div>
        <img className={style.homeimg} src={products} alt="" />
      </div>
      <Header />
   
      
    </>
  );
}
