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
        <p>Together in the game. Strong on the court.</p>

        <div className={style.footerLinks}>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Store</a>
          <a href="#">Events</a>
        </div>

        <hr />

        <p className={style.footerCopy}>
          &copy; 2025 INV Sports. All rights reserved.
        </p>
      </div>
    </footer>
  );
}