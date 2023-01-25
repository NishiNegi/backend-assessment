import { Router } from "express";
import {handleCreateFav} from "./fav.controller"
import {isAuthenticated} from "../../auth/auth.services"

const router = Router();

// POST api/favs/  Creates a fav item
router.post("/", isAuthenticated, handleCreateFav);

// GET api/lists/:id  Reads a specific a fav item
// router.get("/", handleCreateUser);

// PATCH api/lists/:id  Updates a specific a fav item
// router.patch("/", handleCreateUser);

// DELETE api/lists/:id  Deletes a specific a fav item
// router.delete("/", handleCreateUser);
export default router;