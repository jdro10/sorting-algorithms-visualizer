import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FcGenericSortingAsc } from "react-icons/fc";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <FcGenericSortingAsc size={35} /> Sorting algorithms visualization
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
