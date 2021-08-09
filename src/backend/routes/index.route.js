"use strict";

import express from "express";
import * as users from "../controllers/user.controller.js";

const router = express.Router();
import { ctrl } from "./home/home.ctrl.js";

router.get("/", ctrl.output.home);
router.get("/users", users.findAll);

router.post("/authenticate", users.findOne);

export default router;
