import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegEdit, FaPlusCircle } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/footer";
import style from '../styles/Produtos.module.css';

import products3 from '../images/products3.png';

export default function Produtos() {
  const [produtosPorCategoria, setProdutosPorCategoria] = useState({});
  const [carregando, setCarregando] = useState(true);

  const api = axios.create({
    baseURL: "http://localhost:3333"
  });

  useEffect(() => {
    async function carregarDados() {
      try {
        const [resCategorias, resProdutos] = await Promise.all([
          api.get("/categorias"),
          api.get("/produtos")
        ]);

        const categorias = resCategorias.data;
        const produtos = resProdutos.data;

        console.log("Categorias carregadas:", categorias);
        console.log("Produtos carregados:", produtos);

        // Mapear categorias por ID para nome
        const mapaCategorias = {};
        categorias.forEach(cat => {
          mapaCategorias[cat.id] = cat.name;
        });

        console.log("Mapa de categorias (id -> nome):", mapaCategorias);

        // Adicionar nome da categoria a cada produto
        const produtosComCategoria = produtos.map(prod => ({
          ...prod,
          categoria_nome: mapaCategorias[prod.categoryId] || "Outros"
        }));

        console.log("Produtos com categoria adicionada:", produtosComCategoria);

        // Agrupar produtos por nome da categoria
        const agrupado = {};
        produtosComCategoria.forEach(prod => {
          if (!agrupado[prod.categoria_nome]) {
            agrupado[prod.categoria_nome] = [];
          }
          agrupado[prod.categoria_nome].push(prod);
        });

        console.log("Produtos agrupados por categoria:", agrupado);

        setProdutosPorCategoria(agrupado);
        setCarregando(false);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
        setCarregando(false);
      }
    }

    carregarDados();
  }, []);



  const renderProdutoCard = (produto) => (
    <div key={produto.id} className={style.card1}>
      <img src={`http://localhost:3333${produto.imageUrl}`} alt={produto.name} />
      <h2>{produto.name}</h2>
      <div className={style.icone}>
        <h6>{produto.description}</h6> <a href={`/editar-produto/${produto.id}`}><FaRegEdit size={30} /></a>
        <h5>Quantity : {produto.quantity}</h5>
      </div>
      <hr />
      <p>$ {parseFloat(produto.price).toFixed(2)}</p>
    </div>
  );

  if (carregando) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <>
      <div className={style.homeimg}>
        <img src={products3} alt="Banner" />
      </div>

      <Header titulo="Products" />

      {Object.entries(produtosPorCategoria).map(([categoriaNome, produtos], index) => (
        <div key={categoriaNome}>
          <div className={style.about}>
            <hr /><h2>{categoriaNome}</h2><hr />
          </div>

          <section className={
            index % 2 === 0 ? style.cards : style.cardsblack
          }>
            {produtos.map(renderProdutoCard)}
          </section>
        </div>
      ))}

      <a className={style.bot} href='/cadastrar-produto'>
        <FaPlusCircle className={style.svg2} size={15} /> Adicionar Produto
      </a>

      <Footer />
    </>
  );
}
