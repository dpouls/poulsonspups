import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Contact from "./Contact";
function ContactPage() {
  return (
    <div
      style={{
        height: "400px",
        backgroundColor: "#BC8C64",
        fontWeight: "bolder",
      }}
      className="mt-5"
    >
      <Row  className=" d-flex justify-content-center">
        <Col
          className="d-flex flex-column align-items-center my-5 rounded-3 "
          xs="12"
          md="8"
          lg="6"
        >
          <h1 className=" text-center text-light">CONTACT US</h1>
          <p className='text-center'>
            We are available to schedule a visit or reservation via text, phone
            call, or email. We look forward to helping you find family!
          </p>
          <p className=" my-3">(385) 200-4172</p>
          <p className=" my-3">contact@poulsonspups.com</p>
          <p className=" my-3">Columbia, PA</p>
        </Col>
      </Row>
    </div>
  );
}

export default ContactPage;
