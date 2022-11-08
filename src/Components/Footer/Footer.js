import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="footer bg-dark pt-3 pb-2">
      <Container>
        <Row className="text-center">
          <Col xs="12" lg="4">
            <a
              className="my-3 footer-links"
              href="mailto:contact@retailconsultingteam.com"
            >
              contact@poulsonspups.com
            </a>
          </Col>
          <Col xs="12" lg="4">
            <a className="my-3 footer-links" href="tel:4793650109">
              {/* (385) 200-4172 */}
            </a>
          </Col>
          <Col xs="12" lg="4">
            <a
              className="my-3 footer-links"
              href='#top'
            >
              Columbia, PA
            </a>
          </Col>
        </Row>
        <Row>
          <p className="text-center text-light mt-4">
            © Copyright 2021, Poulson's Pups
          </p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
