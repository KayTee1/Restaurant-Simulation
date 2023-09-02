import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../components/OrderCard";


const Kitchen = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/orders").then((response) => {
      const orders = response.data;
      orders.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
      setOrderedItems(orders);
    });
  }, []);

  return (
    <>
      <h1>Kitchen</h1>

      {isEmpty === true ? (
        <h2>No Orders</h2>
      ) : (
        <>
          <h2> Orders: </h2>
          <OrderCard orderedItems={orderedItems} />
        </>
      )}
    </>
  );
};

export default Kitchen;
