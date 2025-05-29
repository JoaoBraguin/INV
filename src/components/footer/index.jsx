import style from './style.module.css';
import INV from '../../images/INV.png'

export default function Footer() {
  return (
    <footer className={style.invFooter}>
      <div className={style.footerContainer}>
        <div className={style.INV}>
          <img src={INV} />
        </div>
        <h2>INV Basketball</h2>
        <p>Juntos no jogo. Fortes na quadra.</p>

        <div className={style.footerLinks}>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <a href="#">Loja</a>
          <a href="#">Eventos</a>
        </div>

        <hr />

        <p className={style.footerCopy}>
          &copy; 2025 INV Sports. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}