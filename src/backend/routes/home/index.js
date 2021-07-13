"use strict";

import { Router } from "express";
const router = Router();

import { ctrl } from "./home.ctrl.js";
import { authentication } from "../authenticate/authenticate.ctrl.js";

router.get("/", ctrl.output.home);
//router.get("/signIn", ctrl.output.signIn);
router.get("/authenticate", authentication.output.signIn);
router.get("/signUp", ctrl.output.signUp);

//router.post("/signIn", ctrl.process.signIn);
router.post("/authenticate", authentication.output.signIn);
router.post("/signUp", ctrl.process.signUp);

export default router;