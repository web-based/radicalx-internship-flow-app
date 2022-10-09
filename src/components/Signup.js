import React, { useRef } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Container } from "react-bootstrap";
import logo from './images/RadicallX-Black-Logo.png'
import "./Dashboard.css";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault()
    navigate("/internship")
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Card>
          <Card.Body>
            <img className="home-logo" src={logo} alt="rdlx_logo" />
            <h2 className="text-center mb-4">Sign Up</h2>
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="paswword">
                  <Form.Label>PassWord</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    className="pass-firm"
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button className="w-100 " type="submit">
                  Sign Up
                </Button>
                <br />
                <br />
                <Button
                  variant="info"
                  className="w-100"
                  type="submit"
                  onClick={handleClick}
                >
                  Internship
                </Button>
              </Form>
            </div>
            <div className="w-100 text-center mt-2">
              Already have an account ? Log In
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Signup
