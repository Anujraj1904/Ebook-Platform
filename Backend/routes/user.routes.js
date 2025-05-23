const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userControllers = require("../controllers/user.controllers");
const { authUser } = require("../middlewares/auth.middleware");
const {
  validateRequest,
  registerValidationRules,
  loginValidationRules,
} = require("../middlewares/validationMiddleware");
const cartControllers = require("../controllers/cart.controllers");
const wishListControllers = require("../controllers/wishList.controllers");

// Registering a new user
router.post(
  "/register",
  registerValidationRules,
  validateRequest,
  userControllers.registerUser
);

// Login a user
router.post(
  "/login",
  loginValidationRules,
  validateRequest,
  userControllers.loginUser
);

// Get user profile
router.get("/profile", authUser, userControllers.getUserProfile);

// Logout a user
router.get("/logout", authUser, userControllers.logoutUser);


module.exports = router;
