import { Router } from "express";
import {isAuthenticated} from "../../auth/auth.services"
import {
    handleCreateList,
    handleGetAllLists,
    handleGetList,
    handleDeleteList,
    handleUpdateItems,
} from "./list.controller"

const router = Router();

// POST api/lists/  Creates a list
router.post("/", isAuthenticated, handleCreateList);

// GET api/lists  Reads all user's list
router.get("/", isAuthenticated, handleGetAllLists);

// GET api/lists/:id  Reads a specific list
router.get("/:id", isAuthenticated, handleGetList);

// PATCH api/lists/:id  Updates a specific list's items
router.patch("/:id", isAuthenticated, handleUpdateItems);

// DELETE api/lists/:id  Deletes a specific list
router.delete("/:id", isAuthenticated, handleDeleteList);
export default router;