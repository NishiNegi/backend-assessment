import { Router } from "express";
import {
    handleCreateUser
} from "./user.controller";

const router = Router();

// POST api/user/
console.log('in users')
router.post("/", handleCreateUser);
export default router;