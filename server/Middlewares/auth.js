import jwt from "jsonwebtoken";
import { SuccessResponse, FailureResponse } from "../utilities/index.js";

 const Auth = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return FailureResponse(
        res,
        "Token not provided, please check",
        null,
        401
      );
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return FailureResponse(res, "Malformed, please check", null, 401);
    }

    try {
      const decoded = jwt.verify(token, process.env.KEY);
      req.user = decoded;
      next();
    } catch (error) {
      console.log(err);
      if (err.name === "JsonWebTokenError") {
        return FailureResponse(res, "Invalid Token", null, 401);
      }
      if (err.name === "TokenExpiredError") {
        return FailureResponse(res, "Token Expired", null, 401);
      }

      return FailureResponse(res, "Authentication Failed", null, 400);
    }
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", error.message, 500);
  }
};

export default Auth;
