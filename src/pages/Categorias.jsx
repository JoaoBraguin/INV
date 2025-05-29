import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from 'axios';
import { Link } from "react-router-dom";
export default function Categorias() {
  const [categorias, setCategorias] = useState([])
  const [busca, setBusca] = useState('');
  const api = axios.create({
    baseURL: "http://localhost:3333"
  })
  useEffect(() => {
    api.get("/categorias").then(res => setCategorias(res.data))
      .catch(err => console.log("Erro ao buscar as Categorias", err)
      )
  }, [api])

  const categoriasFiltradas = busca.trim()
    ? categorias.filter(categoria =>
      categoria.name.toLowerCase().includes(busca.toLocaleLowerCase()
      )
    )
    : categorias;


  return (
    <>
      <Header />
      <Link to="/cadastrar-categoria">
        Adicionar uma categoria
      </Link>
      <input type="text" placeholder='buscar categoria' value={busca} onChange={(e) => setBusca(e.target.value)} />
      {categoriasFiltradas.length === 0 ? (
        <p>Nenhuma Categoria foi cadastrada.</p>
      ) : (
        categoriasFiltradas.map(categoria => (
          <div key={categoria.id}>
            <p>{categoria.id}</p>
            <p>{categoria.name}</p>
            <p>{categoria.description}</p>
            <Link to={`/editar-categoria/${categoria.id}`}>Editar</Link>
          </div>
        ))
      )}
    </>
  );
}


