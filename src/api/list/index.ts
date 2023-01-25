import { Router } from "express";
import {isAuthenticated} from "../../auth/auth.services"
import {handleCreateList} from "./list.controller"

const router = Router();

// POST api/lists/  Creates a list
router.post("/", isAuthenticated, handleCreateList);

// GET api/lists/:id  Reads a specific list
// router.get("/", handleCreateUser);

// PATCH api/lists/:id  Updates a specific list
// router.patch("/", handleCreateUser);

// DELETE api/lists/:id  Deletes a specific list
// router.delete("/", handleCreateUser);
export default router;