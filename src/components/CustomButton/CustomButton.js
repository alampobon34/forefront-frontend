import React from "react";
import Button from "react-bootstrap/button";
import "./CustomButton.css";
function CustomButton({ value, className }) {
  return (
    <>
      <Button variant="outline-primary" className={className}>{value}</Button>
    </>
  );
}

export default CustomButton;
