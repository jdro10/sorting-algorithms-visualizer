import React, { useState, useRef, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bar from "../Bar/Bar";
import Container from "react-bootstrap/Container";
import { bubbleSort } from "../../algorithms/BubbleSort";

const SortingVisualizer = () => {
  const arrayToSort = [6, 3, 1, 7, 6, 5, 4, 3, 2, 1];
  const steps = bubbleSort(arrayToSort);

  const currentIndex = useRef(0);
  const colorSteps = useRef(steps[1]);
  const sortingSteps = useRef(steps[0]);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setArray(sortingSteps.current[currentIndex.current]);
    }, 500);

    if (currentIndex.current + 1 < sortingSteps.current.length) {
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
              color={colorSteps.current[currentIndex.current][index]}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SortingVisualizer;
