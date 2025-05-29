import Header from "../components/Header";
import style from '../styles/Home.module.css'
import quadraHome from '../images/quadraHome.png'
import Footer from "../components/footer";


export default function Home() {
  return (
    <>
      <div>
        <img className={style.homeimg} src={quadraHome} alt="" />
      </div>
      <Header />
      <Footer/>
    </>
  );
}
