import React from "react";
import Col from "react-bootstrap/Col";

const Bar = ({ height, color }) => {
  const style = {
    width: "10px",
    height: height + "px",
    borderRadius: "15px",
    backgroundColor: color,
    marginRight: "1px",
  };

  return <Col style={style} xs={12} />;
};

export default Bar;
