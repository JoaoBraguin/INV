"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import Header from "../components/Header"
import style from "../styles/Home.module.css"
import quadraHome from "../images/quadraHome.png"
import Footer from "../components/footer"
import especialquadra from "../images/especialquadra.png"

import { FaRegEdit } from "react-icons/fa"

export default function Home() {
  const [produtosPorCategoria, setProdutosPorCategoria] = useState({})
  const [carregando, setCarregando] = useState(true)

  const api = axios.create({
    baseURL: "http://localhost:3333",
  })

  useEffect(() => {
    async function carregarDados() {
      try {
        const [resCategorias, resProdutos] = await Promise.all([api.get("/categorias"), api.get("/produtos")])

        const categorias = resCategorias.data
        const produtos = resProdutos.data

        // Mapear categorias por ID para nome
        const mapaCategorias = {}
        categorias.forEach((cat) => {
          mapaCategorias[cat.id] = cat.name
        })

        // Adicionar nome da categoria a cada produto
        const produtosComCategoria = produtos.map((prod) => ({
          ...prod,
          categoria_nome: mapaCategorias[prod.categoryId] || "Outros",
        }))

        // Agrupar produtos por nome da categoria
        const agrupado = {}
        produtosComCategoria.forEach((prod) => {
          if (!agrupado[prod.categoria_nome]) {
            agrupado[prod.categoria_nome] = []
          }
          agrupado[prod.categoria_nome].push(prod)
        })

        setProdutosPorCategoria(agrupado)
        setCarregando(false)
      } catch (err) {
        console.error("Erro ao carregar dados:", err)
        setCarregando(false)
      }
    }

    carregarDados()
  }, [])

  const renderProdutoCard = (produto, cardClass = style.card1) => (
    <div key={produto.id} className={cardClass}>
      <div>
        <img src={`http://localhost:3333${produto.imageUrl}`} alt={produto.name} />
        <h2>{produto.name}</h2>
        <h6>{produto.description}</h6>  <a href={`/editar-produto/${produto.id}`}><FaRegEdit size={30} /></a>
        <h5>Quantity : {produto.quantity}</h5>
        <hr />
        <p>$ {Number.parseFloat(produto.price).toFixed(2)}</p>
      </div>
    </div>
  )

  if (carregando) {
    return <p>Carregando produtos...</p>
  }

  const categorias = Object.keys(produtosPorCategoria)
  const newProducts = categorias.length > 0 ? produtosPorCategoria[categorias[0]]?.slice(0, 3) || [] : []
  const accessoryProducts = categorias.length > 1 ? produtosPorCategoria[categorias[1]]?.slice(0, 3) || [] : []
  const shirtProducts = categorias.length > 2 ? produtosPorCategoria[categorias[2]]?.slice(0, 3) || [] : []
  const specialProduct = categorias.length > 3 ? produtosPorCategoria[categorias[3]]?.[0] : null

  return (
    <>
      <div>
        <img className={style.homeimg} src={quadraHome || "/placeholder.svg"} alt="" />
      </div>
      <Header titulo="Home" />

      <div className={style.about2}>
        <h2>New</h2> <hr /> <a href="/produtos">View All</a>
        <FaRegEdit size={30} />
      </div>
      <section className={style.cardespecial}>{newProducts.map((produto) => renderProdutoCard(produto))}</section>

      <div className={style.about2}>
        <h2>T-Shirts</h2> <hr /> <a href="/produtos">View All</a>
      </div>
      <section className={style.cardsblack}>{accessoryProducts.map((produto) => renderProdutoCard(produto))}</section>

      <section className={style.cardespecial2}>
        <div className={style.about3}>
          <h3>Shoes</h3> <hr /> <a href="/produtos">View All</a>
        </div>
        <div className={style.container}>{shirtProducts.map((produto) => renderProdutoCard(produto, style.card3))}</div>
      </section>

      <section className={style.shoeslebron}>
        <div className={style.special}>
          <h1>Special</h1>  
        </div>
        {specialProduct && (
          <div className={style.card2}>
            <img src={`http://localhost:3333${specialProduct.imageUrl}`} alt={specialProduct.name} />
            <h2>{specialProduct.name}</h2>
            <h6>{specialProduct.description}</h6> <a href={`/editar-produto/${specialProduct.id}`}><FaRegEdit size={30} /></a>
            <hr />
            <p>${Number.parseFloat(specialProduct.price).toFixed(2)}</p>
          </div>
        )}
        <div className={style.especialimg}>
          <img src={especialquadra || "/placeholder.svg"} alt="" />
        </div>
      </section>

      <Footer />
    </>
  )
}