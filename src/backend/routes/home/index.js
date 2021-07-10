"use strict";

import { Router } from "express";
const router = Router();

import { ctrl } from "./home.ctrl.js";

router.get("/", ctrl.output.home);
router.get("/signIn", ctrl.output.signIn);
router.get("/signUp", ctrl.output.signUp);

router.post("/signIn", ctrl.process.signIn);
router.post("/signUp", ctrl.process.signUp);

export default router;