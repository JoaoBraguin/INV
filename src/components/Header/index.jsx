import { Link } from "react-router-dom";
import style from './Header.module.css'
import INV from '../../images/INV.png'


export default function Header({titulo}) {
  return (

    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.INV}>
          <img src={INV} />
          <h1>{titulo}</h1>
        </div>
        <hr/>
        <div className={style.links}>
          <Link className={style.principal} to="/">Home</Link>
          <Link to="/Produtos">Products</Link>
          <Link to="/categorias">Category</Link>
        </div>
      </nav>
    </header>
  )
}