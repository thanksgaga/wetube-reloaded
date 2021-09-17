import express from "express";
import { join, login } from "../controllers/userController";
import { home, trending, newStory } from "../controllers/storyController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", newStory);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
