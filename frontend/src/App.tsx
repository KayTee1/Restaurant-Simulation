import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Menu from "./pages/Menu";
import Kitchen from "./pages/Kitchen";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";
import axios from "axios";
import { MenuItem } from "../models/models";

const App: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [restaurantName, setRestaurantName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/restaurant").then((response) => {
      setMenu(response.data[0].menu);
      setRestaurantName(response.data[0].name)
    });
  }, []);

  return (
    <>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route
            path="/"
            element={
              <Menu
                menu={menu}
                setMenu={setMenu}
                restaurantName={restaurantName}
              />
            }
          />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
