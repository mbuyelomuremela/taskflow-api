import express, { Router } from "express";
import {
  getUser as getUserController,
  updateUser as updateUserController,
  deleteUser as deleteUserController,
} from "../controller/user.js";

const router = Router();

// get a specific user with the given id
router.get("/:id", getUserController);

// update user with the given id
router.put("/:id", updateUserController);

// delete user account with the given id
router.delete("/:id", deleteUserController);

export default router;
