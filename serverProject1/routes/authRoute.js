import express from "express";
import { login, signUp } from "../controllers/authControllers.js";
import { dtlfunc, forgetpassword, logout } from "../controllers/commentController.js";

const route = express.Router();

route.post("/api/v1/signup", signUp);

route.post("/api/v1/login", login);
route.post("/api/v1/logout", logout);
route.put("/api/v1/forgetpassword", forgetpassword);
route.delete("/api/v1/delete", dtlfunc);
export { route} 