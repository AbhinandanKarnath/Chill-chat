import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { checkIn, checkOut, getAttendance } from "../controllers/attendance.controller.js";

const router = express.Router();

// All routes are protected and require authentication
router.post("/checkin", protectRoute, checkIn);
router.post("/checkout", protectRoute, checkOut);
router.get("/", protectRoute, getAttendance);

export default router; 