import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import emailjs from "@emailjs/browser";

import Swal from "sweetalert2";
const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
  process.env;

function Contact(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      emailjs
        .send(
          REACT_APP_SERVICE_ID,
          REACT_APP_TEMPLATE_ID,
          {
            name: state.name,
            email: state.email,
            phone: state.phone,
            company: state.company,
            message: state.message,
          },
          REACT_APP_USER_ID
        )
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
            text: "You should hear back from us as soon as possible.",
            confirmButtonColor: "#013D80",
          });
          console.log(res.status, res.text);
          clearForm();
          setValidated(false)
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Sorry, something went wrong.",
            text: "Please try again later.",
            confirmButtonColor: "013D80",
          });
          console.log(err);
        });
    }
  };
  const clearForm = () => {
    setState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      disabled: true,
    });
  };
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="p-3 my-4 rounded-3"
    
    >
      <h3 className="text-light text-center mt-3">LET'S GET IN TOUCH</h3>
      <p className='text-center m-1'><em className="text-light">Fill out your contact information and we will get back to you as soon as possible.</em></p>
      <Form.Group>
        <FloatingLabel label="Name *" className="mb-3">
          <Form.Control
            type="text"
            required
            name="name"
            value={state.name}
            onChange={handleInput}
            placeholder="Name"
          />
        </FloatingLabel>{" "}
      </Form.Group>
      <Form.Group>
        <FloatingLabel label="Email *" className="mb-3">
          <Form.Control
            type="email"
            required
            name="email"
            value={state.email}
            onChange={handleInput}
            placeholder="Email"
          />
        </FloatingLabel>{" "}
      </Form.Group>
      <Form.Group>
        <FloatingLabel label="Phone" className="mb-3">
          <Form.Control
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleInput}
            placeholder="Phone"
          />
        </FloatingLabel>{" "}
      </Form.Group>
      <Form.Group>
        <FloatingLabel label="Company *" className="mb-3">
          <Form.Control
            type="text"
            required
            name="company"
            value={state.company}
            onChange={handleInput}
            placeholder="Company"
          />
        </FloatingLabel>{" "}
      </Form.Group>

      <Form.Group>
        <FloatingLabel label="Message" className="mb-3">
          <Form.Control
            as="textarea"
            name="message"
            required
            value={state.message}
            onChange={handleInput}
            placeholder="Message"
            style={{ height: "150px" }}
          />
        </FloatingLabel>{" "}
      </Form.Group>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button
            disabled={state.disabled}
            className="btn-maroon"
            type="submit"
          >
            SEND
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Contact;
