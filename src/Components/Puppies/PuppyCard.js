import React from "react";
import "./Puppies.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
function PuppyCard({ puppy }) {
  let { imageSm, imageFull, name, desc } = puppy;

  return (
    <Container className="rounded-3 shadow p-3 h-100">
      <Row>
        <Col xs="12">
          <img className="puppy-card-img" src={imageSm} alt={name} />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <h6 className="text-center my-3">
            <i className="fa fa-solid fa-paw"></i>
            <span className="mx-3">{name}</span>
            <i className="fa fa-solid fa-paw"></i>
          </h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{desc}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default PuppyCard;
