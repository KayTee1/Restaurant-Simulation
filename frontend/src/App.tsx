import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Menu from "./pages/Menu";
import Kitchen from "./pages/Kitchen";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";
import { Order } from "../models/models";

const App: React.FC = () => {
  const [orderedItems, setOrderedItems] = useState<Order[]>([]);

  return (
    <>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route
            path="/kitchen"
            element={
              <Kitchen orders={orderedItems} setOrders={setOrderedItems} />
            }
          />
          <Route
            path="/orders"
            element={
              <Orders orders={orderedItems} setOrders={setOrderedItems} />
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
