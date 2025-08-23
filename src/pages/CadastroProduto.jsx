import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import style from '../styles/CadastroProduto.module.css'
import INV from '../images/INV.png'

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [imagemFile, setImagemFile] = useState(null);
  const [categoriaId, setCategoriaId] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [erro, setErro] = useState("");
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    api.get("/categorias")
      .then(res => setCategorias(res.data))
      .catch(err => console.error("Erro ao buscar categorias:", err));
  }, []);

  const isValid =
    nome.trim() !== "" &&
    descricao.trim() !== "" &&
    preco !== "" &&
    imagemFile !== null &&
    !isNaN(parseFloat(preco));

  async function handleSubmit(e) {
    e.preventDefault();

    if (!imagemFile) {
      setErro("Selecione uma imagem antes de salvar.");
      return;
    }

    const formData = new FormData();
    formData.append("image", imagemFile); // precisa ser "image" por causa do upload.single("image")
    formData.append("name", nome);
    formData.append("description", descricao);
    formData.append("price", preco);
    formData.append("quantity", quantidade);
    formData.append("categoryId", categoriaId || "");

    try {
      setUploading(true);
      await api.post("/produtos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/produtos");
    } catch (err) {
      console.error("Erro ao salvar produto:", err);
      setErro("Erro ao salvar produto.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      <div className={style.gradientbackground}>
        <form onSubmit={handleSubmit}>
          <h2>PRODUCTS REGISTRATION</h2>
          <hr />
          <div className={style.container}>
            <div className={style.dir}>
              <img src={INV} />
            </div>
            <dir className={style.esq}>
              <dir className={style.campo}>
                <label htmlFor="nome">Name :</label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </dir>

              <dir className={style.campo}>
                <label htmlFor="descricao">Description :</label>
                <textarea
                  id="descricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                />
              </dir>

              <dir className={style.campo}>
                <label htmlFor="preco">Price :</label>
                <input
                  type="number"
                  step="0.01"
                  id="preco"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  required
                />
              </dir>

              <dir className={style.campo}>
                <label htmlFor="quantidade">Quantity :</label>
                <input
                  type="number"
                  id="quantidade"
                  min="0"
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                />
              </dir>

              <div className={style.campo}>
                <label htmlFor="imagem" className={style.uploadLabel}>
                  Upload Image :
                </label>

                <input
                  type="file"
                  id="imagem"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] ?? null;
                    setImagemFile(file);
                  }}
                  required
                  className={style.inputFile}
                />

                <span className={style.fileName}>
                  {imagemFile ? imagemFile.name : ""}
                </span>

                {imagemFile && (
                  <div className={style.preview}>
                    <img
                      src={URL.createObjectURL(imagemFile)}
                      alt="Preview"
                      className={style.previewImg}
                    />
                  </div>
                )}
              </div>



              <dir className={style.campo}>
                <label htmlFor="categoria">Category :</label>
                <select
                  id="categoria"
                  value={categoriaId}
                  onChange={(e) => setCategoriaId(e.target.value)}
                >
                  <dir className={style.cat}>
                    <option value="">Select a category</option>
                  </dir>
                  {categorias.map(categoria => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.name}
                    </option>
                  ))}
                </select>
              </dir>

              <div className={style.botoes}>
                <button type="button" onClick={() => navigate(-1)}>
                  Cancel
                </button>
                <button type="submit" disabled={!isValid || uploading}>
                  {uploading ? "Salvando..." : "Save"}
                </button>
              </div>

              {erro && <p style={{ color: 'red' }}>{erro}</p>}
            </dir>
          </div>
        </form>
      </div>

    </>
  );
}
