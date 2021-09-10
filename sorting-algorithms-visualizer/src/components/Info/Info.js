import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const textColor = {
  color: "white",
};

const Info = () => {
  return (
    <Container>
      <Row className="justify-content-center text-center">
        <Col style={textColor} xs="auto">
          <div
            style={{
              width: "50px",
              height: "10px",
              backgroundColor: "#228B22",
            }}
          />{" "}
          Sorted
        </Col>
        <Col style={textColor} xs="auto">
          <div
            style={{
              width: "95px",
              height: "10px",
              backgroundColor: "#b30000",
            }}
          />{" "}
          Comparison
        </Col>
        <Col style={textColor} xs="auto">
          <div
            style={{
              width: "60px",
              height: "10px",
              backgroundColor: "#1E90FF",
            }}
          />{" "}
          Swaping
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
