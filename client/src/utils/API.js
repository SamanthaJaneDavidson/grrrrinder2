// Going to ask about in office hours- believe that in order to have this file, will need a router folder and "user-routes.js" after all
    //route to get logged in user's info (needs the token)
    // export const getMe = (token) => {
    //     return fetch('/api/users/me', {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         authorization: `Bearer ${token}`,
    //       },
    //     });
    //   };

    //   export const createUser = (userData) => {
    //     return fetch('/api/users', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(userData),
    //     });
    //   };
    
    //   export const loginUser = (userData) => {
    //     return fetch('/api/users/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(userData),
    //     });
    //   };

    //   // save dog data for a logged in user
    // export const saveDog = (dogData, token) => {
    //     return fetch('/api/users', {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify(dogData),
    //     });
    //   };

    //   // remove saved dog data for a logged in user
    // export const deleteDog = (dogId, token) => {
    //     return fetch(`/api/users/dogs/${dogId}`, {
    //       method: 'DELETE',
    //       headers: {
    //         authorization: `Bearer ${token}`,
    //       },
    //     });
    //   };


// Code for "user.routes.js" which will have to be inlcuded within the "api" folder, within the "routes" folder within the server file IF this is needed - will ask about in office hours - refer to Week 22, 02-Challenge 

    // const router = require('express').Router();
    // const {
    //   createUser,
    //   getSingleUser,
    //   saveDog,
    //   deleteDog,
    //   login,
    // } = require('../../controllers/user-controller');

    // // import middleware
    // const { authMiddleware } = require('../../utils/auth');

    // // put authMiddleware anywhere we need to send a token for verification of user
    // router.route('/').post(createUser).put(authMiddleware, saveDog);

    // router.route('/login').post(login);

    // router.route('/me').get(authMiddleware, getSingleUser);

    // router.route('/books/:bookId').delete(authMiddleware, deleteDog);

    // module.exports = router;


// Code for "index.js" within the api folder under "routes" in the server file

    //const router = require('express').Router();
    // const userRoutes = require('./user-routes');

    // router.use('/users', userRoutes);

    // module.exports = router;
