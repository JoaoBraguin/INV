import { Link } from "react-router-dom";
import style from './Header.module.css'
import INV from '../../images/INV.png'


export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.INV}>
          <img src={INV} />
        </div>
        <hr />
        <div className={style.links}>
          <Link className={style.principal} to="/">Home</Link>
          <Link to="/Produtos">Produtos</Link>
          <Link to="/categorias">Categorias</Link>
        </div>
      </nav>

    </header>
  )
}