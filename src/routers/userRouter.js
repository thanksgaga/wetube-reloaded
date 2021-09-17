import express from "express";
import { join, login, users, see, edit } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get("/join", join);
userRouter.get("/login", login);
userRouter.get("/edit-profile", edit);
userRouter.get("/:id", see);

export default userRouter;
