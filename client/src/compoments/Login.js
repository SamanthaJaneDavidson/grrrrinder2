import React, { useState } from 'react';
import Auth from '../utils/auth'
import { LOGIN_USER } from '../utils/mutations';
const { useMutation } = require('@apollo/client');
import { Form, Button, Alert, Col, Row } from 'react-bootstrap';

// import styling 


function Login() {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    //   do i need below if i have above ^ commented out corresponding code bellow 
    //   const [username, setUsername] = useState('');
    //   const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState(false);
    const [validated] = useState(false);



    const [login] = useMutation(LOGIN_USER, {
        variables: {
            username: loginData.email,
            password: loginData.password
        },
        onCompleted: (data) => {
            Auth.login(data.login.token);
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };
    //   switch (name) {
    //       case 'username':
    //           setUsername(value);
    //           break;
    //       case 'password':
    //           setPassword(value);
    //           break;

    //   } };


    //   const checkUsernamePassword = (username) => {
    //     const validate = {AuthService}
    //     return validate.test(username);
    // }

    const handleFormSubmit = async (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        try {
            await login();
        }
        catch (ex) {
            console.log(ex);
            setErrorMessage(true);
        }
        setLoginData({
            username: '',
            password: '',
        });

        //sending an error message if one or both of the fields are empty
        // if (!username || !password ) {
        //     setErrorMessage("All fields are required.")
        //     return;
        // }
        // sends an error if the username and password don't match
        // if (!checkUsernamePassword(username)) {
        //     setErrorMessage("Invalid username or password.")
        //     return;
        // }

    };

    return (

        <div>
            <h2>Login</h2>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Row className="mb-3">
                <Form.Group as={Col} md="4">
                    <Form.Label htmlFor='username'>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your username'
                        name='username'
                        onChange={handleInputChange}
                        value={loginData.username}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Your password'
                        name='password'
                        onChange={handleInputChange}
                        value={loginData.password}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Button
                    disabled={!(loginData.username && loginData.password)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>

            {/* using bootstraps form */ }
    {/* <form class="mb-3">
        <label for="inputUsername" className="form-label">Username</label>
        <input
            value={loginData.username}
            onChange={handleInputChange}
            className="form-control"
            type="text"
            placeholder="Username"
            required
        />

        <label for="inputPassword" className="form-label">Password</label>
        <input
            value={loginData.password}
            onChange={handleInputChange}
            className="form-control"
            type="text"
            placeholder="Password"
            required
        />
        <button id="login-button" type="button" className="btn btn-outline-secondary" onClick={handleFormSubmit}>
            Login</button>
    </form> */}

    {
        errorMessage && (
            <p>{errorMessage}</p>
        )
    }
            <p>Don't have an account?</p>
            <button id="signup-button" type="button" className="btn btn-outline-success">Signup</button>
    {/* add code to take you to signup page */ }

     </div >

    )
}

export default Login;