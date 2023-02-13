/** @format */
import "./css/formdata.css";
import FormData from "./form";
import { Container, Row, Col } from "reactstrap";

function FormText() {
  return (
    <Container id="form-container">
      <Row>
        <Col>
          <h1 id="form">Are we Lumber Jacks? Cause we're Login!</h1>
          <p>
            Last, but not least, a simple Login form with some basic form
            validation. The software developers on Fiver told me this is pretty
            popular, so getting the basic gist of creating a login form is
            invaluable for the road ahead. Let's test this bad boy.
          </p>
        </Col>
      </Row>
      <div>
        <FormData />
      </div>
    </Container>
  );
}

export default FormText;
