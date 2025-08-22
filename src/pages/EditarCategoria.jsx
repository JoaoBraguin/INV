import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from '../styles/editarCategoria.module.css'
import INV from '../images/INV.png'

const api = axios.create({
  baseURL: "http://localhost:3333"
});



export default function EditarCategoria() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erro, setErro] = useState("");

  const { id } = useParams();

  async function editarCategoria(e) {
    e.preventDefault();
    try {
      await api.put(`/categorias/${id}`, {
        name: nome,
        description: descricao
      })
      navigate("/categorias")
    } catch (err) {
      setErro(erro)
    }
  }

  async function deletarCategoria(e) {

    if (!window.confirm("Tem certeza que deseja excluir esta categoria?")) return;
    try {
      await api.delete(`/categorias/${id}`)
      navigate("/categorias")
    } catch (err) {
      setErro(erro)
    }
  }



  useEffect(() => {
    (
      async () => {
        try {
          const res = await api.get(`/categorias/${id}`)
          setNome(res.data.name);
          setDescricao(res.data.description);
        } catch (err) {
          setErro(err)

        }
      }
    )()
  }, [id])

  const navigate = useNavigate();
  const isValid = nome.trim() !== "" && descricao.trim() !== "";

  if (erro.response?.status === 404) {
    return (
      <h1>Categoria não encontrada</h1>
    )
  }


  return (
    <>
      <div className={style.gradientbackground}>
        <form action="" onSubmit={editarCategoria}>
          <h2>EDIT CATEGORY</h2>
          <hr />
          <div className={style.container}>
            <dir className={style.esq}>
              <img src={INV} />
            </dir>
            <dir className={style.dir}>
              <div className={style.campo}>
                <label htmlFor="nome">Name :</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Digite um nome de categoria"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className={style.campo2}>
                <label htmlFor="descricao">Description :</label>
                <textarea
                  name="descricao"
                  id="descricao"
                  value={descricao}
                  placeholder="Digite uma descricão"
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                />
              </div>
              <div className={style.botoes}>
                <button type="button" onClick={() => navigate(-1)}>Cancel</button>
                <button type="submit" disabled={!isValid}>Edit</button>
                <button onClick={() => deletarCategoria()}>Delet a Category</button>
              </div>
            </dir>
          </div>
        </form>
      </div>
    </>
  );
}
