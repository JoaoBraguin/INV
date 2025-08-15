import { useEffect, useState } from "react";
import Header from "../components/Header";
import style from '../styles/Categorias.module.css';
import quadracat from '../images/QuadraCategorias.jpeg'
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [busca, setBusca] = useState('');

  const api = axios.create({
    baseURL: "http://localhost:3333"
  });

  useEffect(() => {
    api.get("/categorias")
      .then(res => setCategorias(res.data))
      .catch(err => console.log("Erro ao buscar as Categorias", err));
  }, []);

  const categoriasFiltradas = busca.trim()
    ? categorias.filter(categoria =>
      categoria.name.toLowerCase().includes(busca.toLowerCase())
    )
    : categorias;

  return (
    <>
      <Header />

      <div className={style.imgContainer}>
        <img className={style.homeimg} src={quadracat} alt="" />
      </div>

      <div className={style.bloco}>
        {categoriasFiltradas.length === 0 ? (
          <p>Nenhuma Categoria foi cadastrada.</p>
        ) : (
          categoriasFiltradas.map(categoria => (
            <div className={style.card} key={categoria.id}>
              <div className={style.linha1}>
                <hr className={style.verticalLine} />
                <hr className={style.horizontalLine} />
                <h1>{categoria.name}</h1>
                <hr className={style.horizontalLine} />
                <hr className={style.verticalLine} />
              </div>
              <div className={style.linha2}>
                <p>{categoria.description}</p>
                <div className={style.editButton}>
                  <Link to={`/editar-categoria/${categoria.id}`} className={style.editLink}>
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={style.botaoadd}>
        <Link to="/cadastrar-categoria">
          Add
        </Link>
      </div>
    </>
  );
}
