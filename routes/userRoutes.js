const express = require('express');

const authController = require('../controllers/authController');
///////////////////

const router = express.Router();

router.post('/signup', authController.signup);
router.patch('/confirmEmail/:token', authController.confirmEmail);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.post('/reActivateAccount', authController.reActivateAccount);

// Protect all routes after this middleware
router.use(authController.protect);

router.delete('/deleteAccount', authController.deleteAccount);

module.exports = router;
