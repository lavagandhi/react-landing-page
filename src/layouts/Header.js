import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  Container,
  Form,
  Row,
  Col,
  Card,
} from "react-bootstrap";

import Logo from "./Logo.png";

export default class Header extends Component {
  render() {
    return (
        <div className="header">
      <Container>
        <Navbar  bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              height="45"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Institute</Nav.Link>
              <Nav.Link href="#link">Students</Nav.Link>
              <Nav.Link href="#link">Corporate</Nav.Link>
            </Nav>
            <Form inline>
              <Button className="ml-4" variant="success">
                Login
              </Button>
              <Button className="ml-4" variant="success">
                Register
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="banner">
          <Row>
            <Col>
              <h1 className="bannerTitle">
                Your Dream Job is <br></br> Waiting for you
              </h1>
              <Button variant="success" size="lg" type="submit" >
                      Start Applying
                    </Button>
            </Col>
            <Col>
            <div className="d-flex justify-content-end">
              <Card className="banner-card">
                <Card.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" value="Anne Ortha" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" value="anne_ortha@gmail.com" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" value="Temp!123" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" value="Temp!123" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                      Register
                    </Button>
                    <h4 className="orText">OR</h4>
                    <Button variant="danger" type="submit" block>
                      Sign up with Google
                    </Button>
                    <div className="regTxt">Already have an account? <a href="#">Login here</a></div>
                  </Form>
                </Card.Body>
              </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      </div>
    );
  }
}
