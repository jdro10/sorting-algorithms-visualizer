import React, { useState, useRef, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bar from "../Bar/Bar";
import Container from "react-bootstrap/Container";
import { bubbleSort } from "../../algorithms/BubbleSort";

const arrayToSort = [6, 3, 1, 7, 6, 5, 4, 3, 2, 1];
const steps = bubbleSort(arrayToSort);
const colorSteps = steps[1];
const sortingSteps = steps[0];

const SortingVisualizer = () => {
  const currentIndex = useRef(0);
  const [array, setArray] = useState([]);

  useEffect(() => {
    console.log(colorSteps.length)
    setTimeout(() => {
      setArray(sortingSteps[currentIndex.current]);
    }, 1000);

    if (currentIndex.current + 1 < sortingSteps.length) {
      currentIndex.current++;
      
    }
  }, [array]);

  return (
    <Container>
      <Row>
        {array.map((element, index) => (
          <Col key={index}>
            <Bar
              height={element * 50}
              color={colorSteps[currentIndex.current][index]}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SortingVisualizer;
