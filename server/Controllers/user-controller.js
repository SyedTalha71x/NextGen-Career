import { generateToken } from "../Securities/index.js";
import { connectToDB } from "../DatabaseCon/index.js";
import { SuccessResponse, FailureResponse } from "../utilities/index.js";

const pool = connectToDB();

export const Signup = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", error.message, 500);
  }
};
export const Login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
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
