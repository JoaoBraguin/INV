import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'
import style from '../styles/CadastroCategoria.module.css'
import INV from '../images/INV.png'

const api = axios.create({
  baseURL: "http://localhost:3333"
})

export default function CadastroCategoria() {
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [erro, setErro] = useState("")

  const navigate = useNavigate()

  const isValid =
    nome.trim() !== "" && descricao.trim() !== "";

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("categorias", {
        name: nome,
        description: descricao
      })
      navigate("/categorias")
    } catch (err) {
      setErro(err.message)
      console.log(erro);
    }
  }
  return (
    <>
      <dir className={style.gradientbackground}>
        <form action="" onSubmit={handleSubmit}>
          <h2>CATEGORY REGISTRATION</h2>
          <hr />
          <dir className={style.container}>
            <dir className={style.esq}>
              <img src={INV} />
            </dir>
            <dir className={style.dir}>
              <dir className={style.campo}>
                <label htmlFor="nome">Name :</label>
                <input type="text"
                  id="nome"
                  placeholder="Digite um nome de categoria"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </dir>
              <dir className={style.campo}>
                <label htmlFor="descricao">Description :</label>
                <textarea
                  name="descricao"
                  id="descricao"
                  value={descricao}
                  placeholder="Digite uma descrição"
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                />
              </dir>
              <div className={style.botoes}>
                <button type="button"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
                <button type="submit" disabled={!isValid} >
                  Save
                </button>
              </div>
            </dir>
          </dir>
        </form>
      </dir>

    </>
  );
}
