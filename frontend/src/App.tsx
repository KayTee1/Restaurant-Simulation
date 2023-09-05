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
  const [isKitchenEmpty, setIsKitchenEmpty] = useState<boolean>(true);

  const [foodNames, setFoodNames] = useState<string[]>([]);
  const [isOrderHistoryEmpty, setOrderHistoryEmpty] = useState<boolean>(true);

  const handleOrderItems = () => {
    alert("YA")
  };

  return (
    <>
      <NavBar handleOrderItems={handleOrderItems} />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route
            path="/kitchen"
            element={
              <Kitchen
                orders={orderedItems}
                setOrders={setOrderedItems}
                isEmpty={isKitchenEmpty}
                setIsEmpty={setIsKitchenEmpty}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <Orders
                foodNames={foodNames}
                setFoodNames={setFoodNames}
                isEmpty={isOrderHistoryEmpty}
                setIsEmpty={setOrderHistoryEmpty}
              />
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
