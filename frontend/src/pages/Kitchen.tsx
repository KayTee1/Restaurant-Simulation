import { useEffect } from "react";
import axios from "axios";
import OrderCard from "../components/KitchenOrderCard";
import { Order } from "../../models/models";

interface OrderProps {
  //  Order = order object(id,name,img)
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  //  isEmpty = are there orders for the kitchen
  isEmpty: boolean;
  setIsEmpty: React.Dispatch<React.SetStateAction<boolean>>;
}

const Kitchen: React.FC<OrderProps> = ({
  orders,
  setOrders,
  isEmpty,
  setIsEmpty,
}: OrderProps) => {

  useEffect(() => {
    //array of order objects
    const ordersApiLink = "http://localhost:3001/orders";
    axios.get(ordersApiLink).then((response) => {
      const ordersFromApi = response.data;
      setOrders(ordersFromApi);
      //  if there are no orders in the database isEmpty = true
      setIsEmpty(ordersFromApi.length === 0);
    });
  });

  return (
    <>
      <h1>Kitchen</h1>

      {isEmpty ? (
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
