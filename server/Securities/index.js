import jwt from "jsonwebtoken";

export const generateToken = (userId, email, authType) => {
  const payload = { userId, email, authType };
  try {
    const token = jwt.sign(payload, process.env.KEY);
    return token;
  } catch (error) {
    console.log(error);
  }
};
