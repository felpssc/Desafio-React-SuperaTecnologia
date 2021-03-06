import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

export default function Routes() {
  return (
    <Router>
      <CartProvider>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart}/>
      </CartProvider>
    </Router>
  );
}