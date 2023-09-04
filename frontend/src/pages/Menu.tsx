import React, { useEffect, useState } from "react";
import SingleMenuItem from "../components/SingleMenuItem";
import { MenuItem } from "../../models/models";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

const Menu: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [restaurantName, setRestaurantName] = useState("");
  
  useEffect(() => {
    axios.get("http://localhost:3001/restaurant").then((response) => {
    setMenu(response.data[0].menu);
      setRestaurantName(response.data[0].name);
    });
  }, []);

  const mainCourse = menu.filter((item) => item.category === "Main Course");
  const appetizers = menu.filter((item) => item.category === "Appetizer");
  const desserts = menu.filter((item) => item.category === "Dessert");

  return (
    <>
      <h1 className="mb-5">Welcome to {restaurantName}</h1>

      <h2 className="mt-5">Appetizers</h2>
      <Row md={2} xs={1} className="g-3">
        {appetizers.map((item) => (
          <Col key={item.id}>
            <SingleMenuItem menuItem={item} />
          </Col>
        ))}
      </Row>

      <h2 className="mt-5">Main Course</h2>
      <Row md={2} xs={1} className="g-3">
        {mainCourse.map((item) => (
          <Col key={item.id}>
            <SingleMenuItem menuItem={item} />
          </Col>
        ))}
      </Row>

      <h2 className="mt-5">Desserts</h2>
      <Row md={2} xs={1} className="g-3">
        {desserts.map((item) => (
          <Col key={item.id}>
            <SingleMenuItem menuItem={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Menu;
