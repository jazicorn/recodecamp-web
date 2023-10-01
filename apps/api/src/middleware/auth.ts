import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.cookies_ACCESS_TOKEN;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    return next();
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

};

export default verifyToken;
