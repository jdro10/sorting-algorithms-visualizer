import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FcGenericSortingAsc } from "react-icons/fc";

const iconStyle = {
  transform: "rotate(-90deg)"
}

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <FcGenericSortingAsc size={35} style={iconStyle}/> Sorting algorithms visualization
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
