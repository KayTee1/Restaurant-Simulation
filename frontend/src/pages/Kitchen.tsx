import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../components/OrderCard";

interface OrderProps {
  orderId: number;
  id: number;
  name: string;
  image: string;
}

const Kitchen = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [orderedItems, setOrderedItems] = useState<OrderProps[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3001/orders").then((response) => {
      const orders: OrderProps[] = response.data;
      console.log(orders);
      orders.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
      setOrderedItems(orders);
    });
  }, []);

  const handleDeleteOrder = (orderId: number) => {
    const apiUrl = `http://localhost:3001/orders/${orderId}`;

    axios
      .delete(apiUrl)
      .then((response) => {
        console.log("Resource deleted successfully:", response);

        setTimeout(() => {
          setOrderedItems((prevOrderedItems) => {
            return prevOrderedItems.filter((order) => order.id !== orderId);
          });
        }, 0);
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  return (
    <>
      <h1>Kitchen</h1>

      {isEmpty === true ? (
        <h2>No Orders</h2>
      ) : (
        <>
          <h2>Orders:</h2>
          {orderedItems.map((order, index) => (
            <OrderCard
              key={index}
              orderId={order.id}
              orderName={order.name}
              orderImage={order.image}
              onDelete={(orderId) => handleDeleteOrder(orderId)}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Kitchen;
