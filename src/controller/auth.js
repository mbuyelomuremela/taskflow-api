import { registerUser as registerUserService } from "../services/auth.js";

// create a new user account
export const registerUser = async (req, res) => {
  const user = await registerUserService(req.body);
  if (user === " user with the given email already exist!") {
    return res.json({
      message: `user with email: ${req.body.email} already exist!`,
    });
  }
  return res.json({ status: "created", detail: user });
};
