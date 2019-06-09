import React from "react";
import { Row, Col } from "react-bootstrap";
import "./about.css";
const About = props => (
  <div className="About">
    <Row>
      <div>
        <Col sm={4} md={4} />
      </div>
      <div>
        <Col sm={4} md={4} />
      </div>
      <div>
        <Col sm={4} md={4}>
          <h1>KidsFun</h1>

          <p>
            is a new cutting-edge mobile technology to help families find fun
            things to do nearby
          </p>
          <h5>KidsFun: Fun Family Events & Activities nearby</h5>
        </Col>
      </div>
    </Row>
  </div>
);
export default About;
