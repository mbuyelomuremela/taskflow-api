import prisma from "../config/database.js";

export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      hashedPassword: password,
    },
  });

  return user;
};
