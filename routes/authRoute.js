import express from "express";
import {
  adminLogin,
  createUser,
  deleteOneUser,
  forgotPasswordToken,
  getAllUsers,
  deleteProductCart,
  getOneUser,
  getOrders,
  getAllOrders,
  handleRefreshToken,
  loginCntrlr,
  logout,
  resetPassword,
  saveAddress,
  updatePassword,
  updatedUser,
  viewWishlist,
  updateQuantity,
  verifyAuthToken,
} from "../controllers/userController.js";
import {
  authMiddleware,
  blockUser,
  isAdmin,
  unBlockUser,
} from "../middlewares/authMiddleware.js";
// import {
//   checkoutController,
//   paymentVerification,
// } from "../controllers/paymentController.js";

const router = express.Router();

//User Registration and Authentication
router.post("/register", createUser);
router.post("/login", loginCntrlr);
router.post("/admin-login", adminLogin);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);

//User Management and Authentication Routes

router.get("/refresh", handleRefreshToken);
router.post("/verifyToken", authMiddleware, verifyAuthToken);
router.get("/logout", logout);
router.put("/password", authMiddleware, updatePassword);
router.get("/wishlist", authMiddleware, viewWishlist);
// router.post("/order/checkout", authMiddleware, checkoutController);
// router.post("/order/paymentverification", authMiddleware, paymentVerification);
router.delete("/delete/:prodId", authMiddleware, deleteProductCart);
router.put(
  "/update-cart/:cartItemId/:newQuantity",
  authMiddleware,
  updateQuantity
);
router.get("/get-orders", authMiddleware, getOrders);

router.get("/get-all-orders", authMiddleware, isAdmin, getAllOrders);
router.get("/all-users", authMiddleware, isAdmin, getAllUsers);
router.get("/:id", authMiddleware, isAdmin, getOneUser);

//User Management Routes
router.put("/user-edit", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);
router.delete("/:id", deleteOneUser);

export default router;
