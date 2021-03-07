import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  strong {
    font-size: 22px;
    color: white;
    margin-bottom: 20px;
  }
`;

export const OrderProducts = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    margin-right: 1rem;
    color: whitesmoke;
  }

  button {
    width: auto;
    padding: 0px 10px;
    height: 1.7rem;
    margin-right: 0.2rem;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Work Sans';
    font-weight: 500;
    background-color: #2d2d3d;
    color: whitesmoke;
    outline: none;
  }

  button:hover {
    background: ${darken(0.05, '#7159c1')};
  }

  button:active {
    box-shadow: 0px 0px 4px whitesmoke;
  }

`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    img {
      max-width: 300px;
      align-self: center;
      margin-bottom: 15px;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    a {
      text-decoration: none;
    }
    a > button {
      width: 100%;
      background: #7159c1;
      color: #fff;
      border: 0;
      cursor: pointer;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }
      div {
        display: flex;
        align-items: center;
        margin-left: -2%;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;