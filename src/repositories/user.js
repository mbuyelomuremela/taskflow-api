import prisma from "../config/database.js";

export const getUserById = async (id) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });
    return user;
  } catch (err) {
    console.error(`Error getting user, error: ${err.message}`);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  } catch (err) {
    console.error(`Error getting user, error: ${err.message}`);
  }
};
