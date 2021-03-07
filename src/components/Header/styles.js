import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0%;
`;

export const Title = styled(Link)`
  font-size: 32px;
  font-weight: 700;
  color: whitesmoke;
  text-decoration: none;
  display: flex;

  svg {
    margin-left: 0.3rem;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
  }
  strong {
    display: block;
    color: #fff;
  }
  span {
    font-size: 12px;
    color: #999;
  }
`;
