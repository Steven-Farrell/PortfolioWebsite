/** @format */
import { Container, Row, Col } from "reactstrap";
import "../css/aboutus.css";

function AboutThisWebsite() {
  return (
    <Container>
      <Row className="row-content">
        <Col className="col-sm-6">
          <h1>About This Website</h1>
          <div id="container" className="media">
            <div className="media-body align-self-center">
              <p>
                Welcome to the Watch Me While I Code webpage! This webpage has
                been designed (poorly, I'll admit) to show off some of the
                things I've learned through the weeks of learning React!
                Everything on this page is far from perfect, but it's a step in
                the right direction to understanding how to code, why this
                passes through that, and other such confusing aspects of this
                wonderful language. Let's have some fun while we explore the
                very basics of React and what it can do.
              </p>
            </div>
            <img
              className="img-thumbnail"
              id="aboutusimage"
              src="/PortfolioWebsite/images/aboutusimage.jpg"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutThisWebsite;
