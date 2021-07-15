"use strict";

import express from "express";
const router = express.Router();

import { ctrl } from "./home.ctrl.js";
import { authenticationRoute } from "../authenticate/authenticate.ctrl.js";

router.get("/", ctrl.output.home);

authenticationRoute(router);

export default router;