import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Menu from "./pages/Menu";
import Kitchen from "./pages/Kitchen";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";
import { Order, CartDataItem } from "../../models/models";
import axios from "axios";

const App: React.FC = () => {
  const [orderedItems, setOrderedItems] = useState<Order[]>([]);
  const [isKitchenEmpty, setIsKitchenEmpty] = useState<boolean>(true);

  const [foodNames, setFoodNames] = useState<string[]>([]);
  const [isOrderHistoryEmpty, setOrderHistoryEmpty] = useState<boolean>(true);

  const [cartData, setCartData] = useState<CartDataItem[]>([]);
  const [ordersCount, setOrdersCount] = useState<number>(0);

  const navigate = useNavigate();

  const handleOrderItems = () => {
    // Check if cartData is not empty
    if (cartData.length > 0) {

      cartData.forEach((orderObject, index) => {
        const modifiedOrderObject = { ...orderObject, id: index + 1 };

        axios
          .post("http://localhost:3001/orders", modifiedOrderObject)
          .then((response) => {
            console.log("Order placed in /orders successfully:", response.data);
            navigate("/kitchen");
          })
          .catch((error) => {
            console.error("Error placing order in /orders:", error);
          });

        axios
          .post("http://localhost:3001/orderHistory", modifiedOrderObject)
          .then((response) => {
            console.log(
              "Order placed in /orderHistory successfully:",
              response.data
            );
          })
          .catch((error) => {
            console.error("Error placing order in /orderHistory:", error);
          });
      });
    }
  };

  return (
    <>
      <NavBar handleOrderItems={handleOrderItems} />
      <Container className="mb-4">
        <Routes>
          <Route
            path="/"
            element={
              <Menu
                cartData={cartData}
                setCartData={setCartData}
                ordersCount={ordersCount}
                setOrdersCount={setOrdersCount}
              />
            }
          />
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
