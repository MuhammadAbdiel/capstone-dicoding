import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <HeaderComponent />
      <div className=" d-flex justify-content-center my-5 ">
        <Form style={{ width: "80%" }}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your Password" />
          </Form.Group>

          <Button
            style={{ width: "100%" }}
            className="mb-3 fw-bold"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
          <p className="d-flex justify-content-center">
            Don't have an account? <Link to="/register"> Register here</Link>
          </p>
        </Form>
      </div>
    </>
  );
};

export default Login;
