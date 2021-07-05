"use strict";

import { Router } from "express";
const router = Router();

import { ctrl } from "./home.ctrl.js";

router.get("/", ctrl.output.home);
router.get("/signin", ctrl.output.signin);
router.get("/register", ctrl.output.register);

router.post("/signin", ctrl.process.signin);
router.post("/register", ctrl.process.register);

export default router;