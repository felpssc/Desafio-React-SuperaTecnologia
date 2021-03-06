import React, { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import products from "../../services/products.json";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from "react-icons/md";

import {
  Container,
  ProductTable,
  EmptyCartContainer,
  Total,
  LoadingIcon,
} from "./styles";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const {
    cartItems,
    handleDeleteCartItem,
    handleAddAmount,
    handleRemoveAmount,
    getTotalPrice,
    isDiscountAvailable,
    getTotalPriceWithDiscount
  } = useContext(CartContext);

  return (
    <>
      <Header></Header>
      <Container>
        {cartItems.length > 0 ? (
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Frete</th>
                <th>Subtotal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={require(`../../assets/images/${product.image}`)}
                      alt={product.title}
                    />
                  </td>
                  <td>
                    <strong>{product.name}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        onClick={() => handleRemoveAmount(product)}
                      >
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="number" readOnly value={product.amount} />
                      <button
                        type="button"
                        onClick={() => handleAddAmount(product)}
                      >
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>R$ {isDiscountAvailable() ? <s>{product.shipping.toFixed(2)}</s> : product.shipping.toFixed(2)}</td>
                  <td>
                    {product.id !== product.id && product.id ? (
                      <LoadingIcon color="#333" size={14} />
                    ) : (
                      <strong>
                        {(product.amount * product.price).toFixed(2)}
                      </strong>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDeleteCartItem(product)}
                    >
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>
        ) : (
          <EmptyCartContainer>
            <MdRemoveShoppingCart color="#999" size={50} />
            <strong>Carrinho vazio</strong>
          </EmptyCartContainer>
        )}

        <footer>
          <button type="button" disabled={!(cartItems.length > 0)}>
            FINALIZAR PEDIDO
          </button>
          {cartItems.length > 0 ? <p>*Frete grátis para compras acima de R$250,00!</p> : null}
          <Total>
            <span>Total:</span>
            <strong>R$ {isDiscountAvailable() ? getTotalPriceWithDiscount() : getTotalPrice()}</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
}
