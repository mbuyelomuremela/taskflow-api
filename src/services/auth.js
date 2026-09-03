import bcrypt from "bcrypt";
import { getUserByEmail as getUserByEmailService } from "./user.js";
import { registerUser as registerUserRepository } from "../repositories/auth.js";

export const registerUser = async (userData) => {
  const { email } = userData;
  const user = await getUserByEmailService(email);

  if (user) {
    return "user with the given email already exist!";
  }

  userData.password = await bcrypt.hash(userData.password, 10);

  const userDB = await registerUserRepository(userData);

  return userDB;
};
