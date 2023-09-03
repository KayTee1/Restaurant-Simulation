import React from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

interface OrderCardProps {
  orderId: number;
  orderName: string;
  orderImage: string;
  onDelete: (orderId: number) => void;
}

const OrderCard: React.FC<OrderCardProps> = (Props: OrderCardProps) => {
  const { orderId, orderName, orderImage, onDelete } = Props;

  const handleRemoveOrder = () => {
    const apiUrl = `http://localhost:3001/orders/${orderId}`;

    axios
      .delete(apiUrl)
      .then((response) => {
        console.log("Resource deleted successfully:", response);

        onDelete(orderId);

        //window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={orderImage}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{orderName}</span>
        </Card.Title>
        <Button className="w-100" onClick={() => handleRemoveOrder()}>
          Ready
        </Button>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
