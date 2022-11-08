import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import PuppyCard from "./PuppyCard";
function PuppyList({ puppies }) {
  return (
    <Row className='my-4 '>
      {puppies.map((puppy) => {
        return (
          <Col key={puppy.name} xs="12" md="6" lg="4">
            <PuppyCard puppy={puppy} />
          </Col>
        );
      })}
    </Row>
  );
}

export default PuppyList;
