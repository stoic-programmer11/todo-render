const {Router} = require('express');
const { userLogin } = require('../controllers/auth.controller');

const router = Router();


// Para hacer un login se usa un POST
router.post('/auth/login', userLogin);

module.exports = router;
