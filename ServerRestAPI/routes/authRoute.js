import express from "express";
import {signUpController} from "./controllers/authController.js"
const authRoutes  = express.Router();

authRoutes.post("/signUp", signUpController);
authRoutes.post("/logIn", logInController);
authRoutes.post("/logOut", logOUtController);
authRoutes.put("/forgetgetpassword", forgetPasswordController);

export {authRoutes};