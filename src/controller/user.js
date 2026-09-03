import {
  getUserById as getUserByIdService,
  getUserByEmail as getUserByEmailService,
} from "../services/user.js";

export const getUser = async (req, res) => {
  const user = await getUserByIdService(req.params.id);
  if (!user) {
    return res.json({ message: "No user found" });
  }
  return res.json({ status: "ok", detail: user });
};

export const updateUser = async (req, res) => {
  return res.json({
    status: "ok",
    detail: `user ${req.params.id} data upadated!`,
  });
};

export const deleteUser = async (req, res) => {
  return res.json({
    status: "ok",
    detail: `user ${req.params.id} data deleted!`,
  });
};
