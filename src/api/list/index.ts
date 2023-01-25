import { Router } from "express";
import {isAuthenticated} from "../../auth/auth.services"
import {
    handleCreateList,
    handleGetAllLists,
    handleGetList,
} from "./list.controller"

const router = Router();

// POST api/lists/  Creates a list
router.post("/", isAuthenticated, handleCreateList);

// GET api/lists  Reads all user's list
router.get("/", isAuthenticated, handleGetAllLists);

// GET api/lists/:id  Reads a specific list
router.get("/:id", handleGetList);

// PATCH api/lists/:id  Updates a specific list
// router.patch("/", handleCreateUser);

// DELETE api/lists/:id  Deletes a specific list
// router.delete("/", handleCreateUser);
export default router;