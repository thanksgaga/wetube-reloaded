import express from "express";
import {join, login} from "../controllers/userController";
import {trending, search, newStories} from "../controllers/storyController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/trending", trending);
globalRouter.get("/new", newStories);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);


export default globalRouter;
