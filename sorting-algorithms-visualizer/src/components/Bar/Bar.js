import React from "react";
import Col from "react-bootstrap/Col";

const Bar = ({ height, color }) => {
  const columnStyle = {
    width: "10px",
    height: height + "px",
    borderRadius: "15px",
    backgroundColor: color,
    marginTop: 600 - height + "px",
    marginRight: "1px",
  };

  const textStyle = {
    transform: "rotate(-90deg)",
    marginTop: "25px",
  };

  return (
    <Col style={columnStyle} xs={12} className="align-middle">
      <p style={textStyle}>{height}</p>
    </Col>
  );
};

export default Bar;
