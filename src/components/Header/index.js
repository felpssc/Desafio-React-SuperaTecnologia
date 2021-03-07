import { Container, Title, Cart } from "./styles";
import { BiCartAlt } from "react-icons/bi";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { MdGames } from "react-icons/md";

export function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <Container>
      <Title to="/">
        <i>E-commerce Games</i>
        <div>
          <MdGames size={40} />
        </div>
      </Title>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartItems.length} itens</span>
        </div>
        <BiCartAlt size={56} color="whitesmoke"></BiCartAlt>
      </Cart>
    </Container>
  );
}
