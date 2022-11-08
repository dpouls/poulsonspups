import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import puppy from "../../assets/puppy.jpg";
import "./Landing.css";

import { useNavigate } from "react-router";

import PuppyList from "../Puppies/PuppyList";
import { Link } from "react-router-dom";
import Puppies from "../Puppies/Puppies";
function Landing() {
 
  return (
    <Container>
      <Row className="my-5">
        <Col
          xs="12"
          className="bg-puppy d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${puppy})`,
          }}
        >
          <h1 className="landing-title text-center text-light ">
            Poulson's Pups
          </h1>
        </Col>
      </Row>
      <Puppies/>
    
    </Container>
  );
}

export default Landing;
