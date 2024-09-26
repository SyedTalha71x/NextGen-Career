import {
  generateToken,
  hashpassword,
  verifyPassword,
} from "../Securities/index.js";
import { connectToDB } from "../DatabaseCon/index.js";
import { SuccessResponse, FailureResponse } from "../utilities/index.js";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../Validitions/index.js";
import {
  LOGIN_FETCH_QUERY,
  SIGNUP_FETCH_QUERY,
  SIGNUP_INSERT_QUERY,
} from "../Models/user-model-db.js";

const pool = connectToDB();

export const Signup = async (req, res) => {
  const { username, email, password } = req.body;

  console.log(username, email, password);

  const authType = "standard";

  if (!validateUsername(username)) {
    return FailureResponse(res, "Username is not valid", 400);
  }
  if (!validateEmail(email)) {
    return FailureResponse(res, "Email is not valid", 400);
  }
  if (!validatePassword(password)) {
    return FailureResponse(res, "Password is not valid", 400);
  }
  try {
    pool.query(SIGNUP_FETCH_QUERY, [username, email], (err, results) => {
      if (err) {
        return FailureResponse(res, "Internal Server Error", err.message, 500);
      }
      if (results.length > 0) {
        return FailureResponse(res, "A record already exists", 400);
      }
      const hashedpassword = hashpassword(password);
      pool.query(
        SIGNUP_INSERT_QUERY,
        [username, email, hashedpassword],
        (err, result) => {
          if (err) {
            return FailureResponse(
              res,
              "Internal Server Error",
              err.message,
              500
            );
          }
          const token = generateToken(result.insertId, email, authType);
          return SuccessResponse(res, { token }, "Signup Successfully", 200);
        }
      );
    });
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", error.message, 500);
  }
};
export const Login = async (req, res) => {
  const { email, password } = req.body;
  const authType = "standard";

  if (!validateEmail(email)) {
      return FailureResponse(res, "Email is not valid", "", 400);
  }
  if (!validatePassword(password)) {
      return FailureResponse(res, "Password is not valid", "", 400);
  }
  
  try {
      pool.query(LOGIN_FETCH_QUERY, [email], (err, result) => {
          if (err) {
              return FailureResponse(res, "Internal Server Error", err.message, 500);
          }
          
          if (result.length === 0) {
              return FailureResponse(res, "User not found", "", 404);
          }

          const user = result[0];
          if (!verifyPassword(user.password, password)) {
              return FailureResponse(res, "Password is invalid", "", 400);
          } else {
              const token = generateToken(user.id, email, authType);
              return SuccessResponse(res, { token },"Login Successfull", 200);
          }
      });
  } catch (error) {
      console.error(error); 
      return FailureResponse(res, "Internal Server Error", error.message, 500);
  }
};
export const verifyEmail = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", error.message, 500);
  }
};
export const requestForOTP = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", error.message, 500);
  }
};
export const verifyOTP = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", error.message, 500);
  }
};
export const resetPassword = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", error.message, 500);
  }
};
