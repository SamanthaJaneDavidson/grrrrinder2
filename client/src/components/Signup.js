import React, { useState } from 'react';
import { Form, Button, Alert, Row } from 'react-bootstrap';
import Auth from '../utils/auth';

// import { createUser } from '../utils/API';
//do we need something like this ^
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

const Signup = () => {
  // set initial form state
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [errorMessage, setErrorMessage] = useState(false);
  const [addUser] = useMutation(ADD_USER);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      const { data } = await addUser({ variables: { ...signupData } });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setErrorMessage(true);
    }

    setSignupData({
      username: "",
      email: "",
      password: "",
    });

    //on submit of this form it will take you to the profile page
    window.location.replace("/profile");
  };

  return (
    <div className="Auth-form-container">
      <div className="Auth-form ">
        <h1>Create an Account</h1>
        {/* This is needed for the validation functionality above */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {/* show alert if server response is bad */}
          <Alert
            dismissible
            onClose={() => setErrorMessage(false)}
            show={errorMessage}
            variant="danger"
          >
            Something went wrong with your signup!
          </Alert>
          <Row className="mb-3 justify-content-center">
            <Form.Group className="font-weight-bold text-small col-md-7">
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your username"
                name="username"
                onChange={handleInputChange}
                value={signupData.username}
                required
              />
              <Form.Control.Feedback type="invalid">
                Username is required!
              </Form.Control.Feedback>
            </Form.Group>

        <Form.Group className="font-weight-bold text-small col-md-7">
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={signupData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="font-weight-bold text-small col-md-7">
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={signupData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Button
          disabled={!(signupData.username && signupData.email && signupData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default Signup;
