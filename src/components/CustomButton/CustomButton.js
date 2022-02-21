import React from "react";
import Button from "react-bootstrap/button";
import "./CustomButton.css";
function CustomButton({ value }) {
  return (
    <>
      <Button variant="outline-primary">{value}</Button>
    </>
  );
}

export default CustomButton;
