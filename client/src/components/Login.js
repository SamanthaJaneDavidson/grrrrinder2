import React, { useState } from 'react';
import Auth from '../utils/auth'
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { Form, Button, Alert, Col, Row } from 'react-bootstrap';

// import styling 


function Login() {

    const [loginData, setLoginData] = useState({ username: '', password: '' });

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
            const {data} = await login({  
                variables: {
                username: loginData.username,
                password: loginData.password
            },});
            Auth.login(data.login.token);
        }
        catch (ex) {
            console.log(ex);
            setErrorMessage(true);
        }
        setLoginData({
            username: '',
            password: '',
        });

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
