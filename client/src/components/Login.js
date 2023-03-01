import React, { useState } from "react";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
//need to remove Alert
import { Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import styling
import { redirect } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(false);
  const [validated] = useState(false);

  const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: {
          username: loginData.username,
          password: loginData.password,
        },
      });

      // let's log to console what data looks like
      console.log("login data object is", data);

      Auth.login(data.login.token);
    } catch (ex) {
      console.log(ex);
      setErrorMessage(true);
    }
    setLoginData({
      username: "",
      password: "",
    });
    // momentarily commment out
    // window.location.replace("/profile")
    redirect("/profile");
  };

  return (
    <div className="Auth-form-container ">
      <div className="Auth-form ">
        <h1>Login</h1>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Row className="mb-3 justify-content-center">
            <Form.Group className="font-weight-bold text-small col-md-7">
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your username"
                name="username"
                onChange={handleInputChange}
                value={loginData.username}
                required
              />
              <Form.Control.Feedback type="invalid">
                Username is required!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="font-weight-bold text-small mt-3 col-md-7">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password"
                name="password"
                onChange={handleInputChange}
                value={loginData.password}
                required
              />
              <Form.Control.Feedback type="invalid">
                Password is required!
              </Form.Control.Feedback>
          <Button
          className="mt-3"
            disabled={!(loginData.username && loginData.password)}
            type="submit"
            variant="success"
          >
            Submit
          </Button >
        {errorMessage && <p>{errorMessage}</p>}

        <p className="mt-3">Don't have an account?</p>
        <Link to="/signup">
          {" "}
          <button
            id="signup-button"
            type="button"
            className="btn btn-outline-success"
          >
            Signup
          </button>
        </Link>
            </Form.Group>
          </Row>

        </Form>

      </div>
    </div>
  );
}

export default Login;
