import React, { useEffect, useState } from "react";
import axios from "axios";
import PieChart from "../components/PieChart";

const Orders: React.FC = () => {
  const [foodNames, setFoodNames] = useState<string[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/orderHistory").then((response) => {
      const res = response.data;
      const names = res.map((item: { name: string }) => {
        return item.name;
      });

      setFoodNames(names);
    });
  }, []);

  return (
    <>
      <h1>All orders from today</h1>
      <PieChart foodNames={foodNames} />
    </>
  );
};

export default Orders;
