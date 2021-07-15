"use strict";

import { app } from "express";
const app = Router();

import { ctrl } from "./home.ctrl.js";
import { authenticationRoute } from "../authenticate/authenticate.ctrl.js";

router.get("/", ctrl.output.home);

authenticationRoute(app);

export default router;