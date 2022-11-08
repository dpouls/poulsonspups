import React from "react";

import "./About.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <Container style={{ backgroundColor: "#CFB29A" }}>
      <Row className="p-5" >
        <Col className="d-flex flex-column align-items-center" xs="12" lg="5">
          <h2 className="mb-3">THE FAMILY</h2>
          <h3  className="mb-5">Here's a little about us!</h3>
          <p className="text-center " style={{fontSize: "15pt"}}>
            Hi there! Our names are Abby and Dallin and we love our dogs. We
            have two- Honey and Luna who are both Mini Goldendoodles. We
            learned how to breed dogs from Dallin's dad, who breeds golden
            retriever puppies in Utah. Honey is from one of his litters.
          </p>
          <p className="text-center " style={{fontSize: "15pt"}}>
            We hope to bring your family as much joy as our dogs bring to us,
            through one of our puppies. Right now Dallin also works as a Web
            Developer while Abby goes to school part-time. We love to be
            outdoors and hanging with our pups!
          </p>
        </Col>
        <Col xs="12" lg="7" className='p-5'>
          <img
            style={{ width: "100%", maxHeight: '500px', objectFit: "cover" }}
            src="/images/fullsize/us.jpg"
            alt=""
            srcset=""
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
