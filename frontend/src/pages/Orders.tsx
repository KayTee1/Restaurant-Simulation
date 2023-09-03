import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

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
      <h1>Orders</h1>
    </>
  );
};

export default Orders;
