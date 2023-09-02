import React, { useState } from "react";
import { MenuItem } from "../../models/models";
import { Button, Card } from "react-bootstrap";

interface Props {
  menuItem: MenuItem;
  setMenu?: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const OrderCard: React.FC<Props> = ({ menuItem }: Props) => {
  const { id, name, imgUrl} = menuItem;

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
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
