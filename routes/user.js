import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { getAllUsers } from '../controllers/user.js';
import { getMyProfile } from '../controllers/user.js';
import { loginUser } from '../controllers/user.js';
import { registerUser } from '../controllers/user.js';

const router = express.Router();

router.get("/all", getAllUsers);
router.get("/me", isAuthenticated, getMyProfile);
router.post("/login",loginUser);
router.post("/register",registerUser);




export default router;