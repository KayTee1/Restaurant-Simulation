import React from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { Order } from "../../models/models";

interface Props {
  order: Order;
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

const KitchenOrderCard: React.FC<Props> = ({
  order,
  orders,
  setOrders,
}: Props) => {
  
  const handleRemoveOrder = (id: number) => {
    const apiUrl = `http://localhost:3001/orders/${order.id}`;

    axios
      .delete(apiUrl)
      .then((response) => {
        console.log("Resource deleted successfully:", response);

        setOrders(orders.filter((order) => order.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={order.image}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{order.name}</span>
        </Card.Title>
        <Button className="w-100" onClick={() => handleRemoveOrder(order.id)}>
          Ready
        </Button>
      </Card.Body>
    </Card>
  );
};

export default KitchenOrderCard;
