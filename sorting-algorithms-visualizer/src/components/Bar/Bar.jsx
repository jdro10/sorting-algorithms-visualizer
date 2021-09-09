import React from "react";

const Bar = ({ height, color }) => {
  const style = {
    width: "30px",
    height: height + "px",
    borderRadius: "15px",
    backgroundColor: color,
  };

  return <div style={style} />;
};

export default Bar;
