import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
<<<<<<< HEAD
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
=======
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
  const token = jwt.sign({ userId }, JWT_SECRET, {
>>>>>>> 16cf9cfa0d2c80c48fbf8fc178e3b958214176ab
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // milliseconds
    httpOnly: true, // prevent XSS attacks
    sameSite: "strict", // CSRF attacks
    secure: process.env.NODE_ENV === "development" ? false : true,
  });
  return token;
};
