import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../components/OrderCard";
import { Order } from "../../models/models";

interface OrderProps {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

const Kitchen: React.FC<OrderProps> = ({ orders, setOrders }: OrderProps) => {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/orders").then((response) => {
      const ordersFromApi = response.data;
      ordersFromApi.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
      setOrders(ordersFromApi);
    });
  }, [setOrders]);

  return (
    <>
      <h1>Kitchen</h1>

      {isEmpty === true ? (
        <h2 className="mt-5">No Orders</h2>
      ) : (
        <>
          <h2>Orders:</h2>
          {orders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              orders={orders}
              setOrders={setOrders}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Kitchen;
