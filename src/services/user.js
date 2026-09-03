// get user by id
import {
  getUserById as getUserByIdRepository,
  getUserByEmail as getUserByEmailRepository,
} from "../repositories/user.js";

export const getUserById = async (id) => {
  const user = await getUserByIdRepository(id);
  if (!user) {
    return null;
  }
  return user;
};

export const getUserByEmail = async (email) => {
  const user = await getUserByEmailRepository(email);
  if (!user) {
    return null;
  }
  return user;
};
