import React, { useEffect } from "react";
import axios from "axios";
import PieChart from "../components/PieChart";
import { Button } from "react-bootstrap";

interface OrdersProps {
  //foodNames = the food names of all the orders
  foodNames: string[];
  setFoodNames: React.Dispatch<React.SetStateAction<string[]>>;
  // isEmpty = is there any orders in the orderHistory array
  isEmpty: boolean;
  setIsEmpty: React.Dispatch<React.SetStateAction<boolean>>;
}

const Orders: React.FC<OrdersProps> = ({
  foodNames,
  setFoodNames,
  isEmpty,
  setIsEmpty
}: OrdersProps) => {

  const orderHistoryApi = "http://localhost:3001/orderHistory";
  //  getting date for the chart
  useEffect(() => {
    axios.get(orderHistoryApi).then((response) => {
      const res = response.data;
      const names = res.map((item: { name: string }) => {
        return item.name;
      });

      setFoodNames(names);
      setIsEmpty(names.length === 0);
    });
  });

  //resetChart = empties orderHistory array
  const resetChart = () => {
    //asking for confirmation
    if (window.confirm("Are you sure?\nThis will reset the orders!!")) {
      //deleting each order object from the database
      for (const count in foodNames) {
        const id: number = parseInt(count) + 1;

        axios.delete(`${orderHistoryApi}/${id}`).then((response) => {
          const res = response.data;
          console.log("Deleted", res);
        });
      }
      //  after deleting everything set empty to true
      setIsEmpty(true);
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
