/** @format */
import { Container, Row, Col } from "reactstrap";
import ToDo from "./todo";
import "./css/todo.css";

function ToDoText() {
  return (
    <Container id="todocontainer">
      <Row>
        <Col>
          <h1 id="todolist">Missed it? List it!</h1>
          <p>
            This is a very basic To-Do list. Looking up beginner projects for
            learning React, To-Do lists were a heavy recommendation to get used
            to and understand how Functions, Filters, useStates and Arrays
            worked. Although simple, this took a surprising amount of time to
            get working properly (for me, anyway). Let's take a look at how it
            works!
          </p>
        </Col>
      </Row>
      <div>
        <ToDo />
      </div>
    </Container>
  );
}

export default ToDoText;
