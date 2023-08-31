import React, { useState } from "react";
import { MenuItem } from "../../models/models";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

interface Props {
  menuItem: MenuItem;
  setMenu?: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const SingleMenuItem: React.FC<Props> = ({ menuItem }: Props) => {
  const { id, name, price, imgUrl, category, description } = menuItem;

  const [quantity, setQuantity] = useState(0);

  console.log(id, category, description);
  const addOrder = () => {
    setQuantity(quantity + 1);
  };
  const removeOrder = () => {
    setQuantity(quantity - 1);
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={addOrder}>
              Place an Order
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <Button className="w-100" variant="danger" onClick={removeOrder}>
                Remove Order
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleMenuItem;
