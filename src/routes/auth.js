import express, { Route, Router } from "express";
import { registerUser as registerUserController } from "../controller/auth.js";

const router = Router();

router.post("/register", registerUserController);

export default router;
