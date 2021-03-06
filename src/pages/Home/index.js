import React, { useContext, useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { ProductList, OrderProducts } from "./styles";
import products from "../../services/products.json";
import { Header } from "../../components/Header";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Home() {
  const { cartItems ,handleAddCartItem } = useContext(CartContext);
  const [ orderProductsChanged, setOrderProductsChanged ] = useState(1);
  
  function sortProductsByName() {
    let productsOrderedByName = products.sort(function(a, b){
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
  
      return a < b ? -1 : a > b ? 1 : 0;
    });
    setOrderProductsChanged(orderProductsChanged + 1);
    return productsOrderedByName;
  }

  function sortProductsByPrice() {
    let productsOrderedByPrice = products.sort(function(a, b) {
      return a.price - b.price;
    });
    setOrderProductsChanged(orderProductsChanged + 1);
    return productsOrderedByPrice;
  };

  function sortProductsByScore() {
    let productsOrderedByScore = products.sort(function(a, b) {
      return a.score - b.score;
    });
    setOrderProductsChanged(orderProductsChanged + 1);
    return productsOrderedByScore;
  }

  useEffect(() => {}, [orderProductsChanged]);

  return (
    <>
      <Header></Header>
      <OrderProducts>
        <p>Ordernar produtos por: </p>
        <button onClick={sortProductsByName}>Nome</button>
        <button onClick={sortProductsByPrice}>Preço</button>
        <button onClick={sortProductsByScore}>Popularidade</button>
      </OrderProducts>
      <ProductList length={products.length}>
        { products.map((product) => (
        <li key={product.id}>
          <img
            src={require(`../../assets/images/${product.image}`)}
            alt={product.title}
          />

          <strong>{product.name}</strong>
          <span>R$ {product.price.toFixed(2)}</span>
          <Link to="/cart">
          <button type="button" onClick={() => handleAddCartItem(product)}>
            <div>
              <FaCartPlus size={16} color="#FFF" />
              {cartItems.map(cartItem => cartItem.id === product.id && cartItem.amount)}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
          </Link>
        </li>
      )) }
      </ProductList>
    </>
  );
}
