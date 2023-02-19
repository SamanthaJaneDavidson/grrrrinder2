import React, { useState } from 'react';
// import styling 



function Login() {
            
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
      const { name, value } = e.target;

      switch (name) {
          case 'username':
              setUsername(value);
              break;
          case 'password':
              setPassword(value);
              break;

      }
  };

  const checkUsernamePassword = (username) => {
    const validate = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    // this will get changed to code for validating email/password 
    return validate.test(username);
}
  
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    //sending an error message if one or all of the fields are empty
    if (!username || !password ) {
        setErrorMessage("All fields are required.")
        return;
    }
    // !!! need to actually make this part functional-
    if (!checkUsernamePassword(username)) {
        setErrorMessage("Invalid username or password.")
        return;
    }

};

    return (

        <div>
            <h2>Login</h2>
            {/* using bootstraps form */}
            <form class="mb-3">
                <label for="inputUsername" className="form-label">Username</label>
                <input 
                    value= {username}
                    onChange={handleInputChange}
                    className="form-control" 
                    type= "text"
                    placeholder="Username" 
                    required
                />

                <label for="inputPassword" className="form-label">Password</label>
                <input 
                    value= {password}
                    onChange={handleInputChange}
                    className="form-control" 
                    type="text" 
                    placeholder="Password" 
                    required
                />
                <button id="login-button" type="button" className="btn btn-outline-secondary" onClick={handleFormSubmit}>
                Login</button>
            </form>
            
                {errorMessage && (
                <p>{errorMessage}</p>
            )}
            <p>Don't have an account?</p>
            <button id= "singup-button" type="button" className="btn btn-outline-success">Signup</button>
            {/* add code to take you to signup page */}

        </div>

    )
}

export default Login;