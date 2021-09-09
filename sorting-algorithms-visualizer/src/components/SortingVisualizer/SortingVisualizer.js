import React, { useState, useRef, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Bar from "../Bar/Bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { bubbleSort } from "../../algorithms/BubbleSort";

const arrayToSort = randomArray();
const steps = bubbleSortAlgorithm();
const colorSteps = steps[1];
const sortingSteps = steps[0];

function randomArray() {
  return [...Array(50)].map((_) => 50 + Math.ceil(Math.random() * 500));
}

function bubbleSortAlgorithm() {
  return bubbleSort(arrayToSort);
}

const SortingVisualizer = () => {
  const currentIndex = useRef(0);
  const [render, setRender] = useState(false);
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (!render && currentIndex.current === 0) {
      setArray(sortingSteps[0]);
    }

    if (render) {
      setTimeout(() => {
        setArray(sortingSteps[currentIndex.current]);
      }, 500);

      if (currentIndex.current + 1 < sortingSteps.length) {
        currentIndex.current++;
      }
    }
  }, [render, array]);

  return (
    <Container fluid>
      <Button onClick={() => setRender(!render)}>Start/Stop</Button>
      <Row className="justify-content-center">
        {array.map((element, index) => (
          <Bar
            key={index}
            height={element}
            color={colorSteps[currentIndex.current][index]}
          />
        ))}
      </Row>
    </Container>
  );
};

export default SortingVisualizer;
