/** @format */

import Calculator from "./calculator";
import { Container, Row, Col } from "reactstrap";
import "./css/calculator.css";
import "./css/calculatortext.css";

function CalculatorText() {
  return (
    <Container id="calccontainer">
      <Row>
        <Col>
          <h1 id="calc">5 Hours to Complete? That adds up...</h1>
          <p>
            Calculators were also a really big recommendation for beginners new
            to the world of React. This particular project was really difficult,
            as it introduced me to an array (puns and stuff) of new functions.
            Figuring out how to fix all the small bugs like the text flying off
            the display and being able to add multiple operators in a row was an
            adventure to say the least, but in the end it works pretty well.
            Let's give it a shot!
          </p>
        </Col>
      </Row>
      <div className="align-items-center">
        <Calculator />
      </div>
    </Container>
  );
}

export default CalculatorText;
