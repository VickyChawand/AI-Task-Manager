const express = require("express");
const router = express.Router();
import { createUser } from "../controllers/userController";

router.post("/", createUser);

module.exports = router;