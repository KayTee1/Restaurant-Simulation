import React, { useEffect, useState } from "react";
import axios from "axios";
import PieChart from "../components/PieChart";
import { Button } from "react-bootstrap";

const Orders: React.FC = () => {
  const [foodNames, setFoodNames] = useState<string[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const orderHistoryApi = "http://localhost:3001/orderHistory";

  useEffect(() => {
    axios.get(orderHistoryApi).then((response) => {
      const res = response.data;
      const names = res.map((item: { name: string }) => {
        return item.name;
      });

      setFoodNames(names);
      setIsEmpty(names.length === 0);
    });
  }, [foodNames.length]);

  const resetChart = () => {
    if (window.confirm("Are you sure?\nThis will reset the orders!!")) {
      for (const count in foodNames) {
        const id: number = parseInt(count) + 1;

        axios.delete(`${orderHistoryApi}/${id}`).then((response) => {
          const res = response.data;
          console.log("Deleted", res);
        });
      }
    }
  };

  return (
    <>
      <h1 className="mb-3">All orders from today</h1>

      {isEmpty ? (
        <h2 className="mt-4">No orders yet</h2>
      ) : (
        <>
          <Button onClick={resetChart} className="mb-2" variant="danger">
            Reset Chart
          </Button>
          <PieChart foodNames={foodNames} />
        </>
      )}
    </>
  );
};

export default Orders;
