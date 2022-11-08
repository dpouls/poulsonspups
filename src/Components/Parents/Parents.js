import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
function Parents() {
  return (
    <div>
      <h1
        style={{
          width: "100%",
          height: "200px",
          lineHeight: "200px",
          backgroundColor: "#BC8C64",
          fontSize: "50pt",
        }}
        className="text-light text-center"
      >
        DAMS (MOMMIES)
      </h1>

      <Row className="my-5">
        <Col xs="12" md="6">
          <img
            className="parent-pic"
            src="/images/fullsize/honey.jpg"
            alt="Honey, a cream colored mini goldendoodle."
          />
        </Col>
        <Col xs="12" md="6" className="d-flex flex-column align-items-center">
          <h1
            className="text-center pacifico mb-4 "
            style={{ color: "#BC8C64" }}
          >
            Honey
          </h1>
          <p className="pt-3 w-75">
            Honey has been in the family since birth! She was one of Dallin's
            dad's puppies. Honey LOVES cuddles and is Miss Congeniality. She
            cries when she sees dogs through the living room window because she
            can't go say hi. She loves belly rubs and is such a good momma.
          </p>
          <p className="pt-3 w-75">
            Her mom is a golden retriever and her dad is a 13 lb poodle-- which
            makes her an F1 mini Goldendoodle. She weighs 30 lbs and has wavy
            blonde hair. She is pretty chill and loves to take naps. We love her
            so much.
          </p>
        </Col>
      </Row>
      <h1
        style={{
          width: "100%",
          height: "200px",
          lineHeight: "200px",
          backgroundColor: "#7CB2BE",
          fontSize: "50pt",
        }}
        className="text-light text-center"
      >
        SIRES (DADDIES)
      </h1>

      <Row className="my-5">
        <Col xs="12" md="6" className="d-flex flex-column align-items-center">
          <h1
            className="text-center pacifico mb-4 "
            style={{ color: "#7CB2BE" }}
          >
            Louis
          </h1>
          <p className="pt-3 w-75">
            Louis is a sire from doodle Haus that Honey was bred with this heat
            cycle. He is a 15 lb Red Mini Multi-Gen Goldendoodle. He is chill and loves to meet
            new people. You can learn more about him at{" "}
            <a
              style={{ color: "#7CB2BE" }}
              href="https://www.thedoodlehaus.com/papas"
              target="_blank"
              rel="noreferrer"
            >
              thedoodlehaus.com/papas
            </a>
          </p>
        </Col>
        <Col xs="12" md="6">
          <img
            className="parent-pic"
            src="/images/fullsize/louis.jpg"
            alt="Louis, a cream colored mini goldendoodle."
          />
        </Col>
      </Row>
      <Row
        style={{ height: "400px", backgroundColor: "#BC8C64" }}
        className="pt-4 d-flex flex-column align-items-center"
      >
        <Col xs="12">
          <h1 className="landing-title text-light text-center my-4">
            OUR PARENTS
          </h1>
        </Col>

        <Col xs="12" md="8" lg="6">
          <p className="text-center " style={{fontSize: '20px'}}>
            We make sure our parents are family pets that are treated so. Louis
            and Honey both have amazing homes and love spending time with their
            humans.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Parents;
