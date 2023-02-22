const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveDog,
  deleteDog,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveDog);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/Dog/:dogId').delete(authMiddleware, deleteDog);

module.exports = router;
