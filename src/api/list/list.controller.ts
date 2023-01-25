import { Request, Response } from "express";
import { createList } from "./list.services";
import { verifyToken, getUserFromToken, JWTDecoded } from "../../auth/auth.services";
import { updateUserLists } from "../user/user.services";

export async function handleCreateList(req: Request, res: Response) {
  const data = req.body;
  try {
    // verify user token from header
    const userToken = req.headers?.authorization?.split(" ")[1] as string;
    const decoded = verifyToken(userToken) as JWTDecoded;

    // get user by id from token
    const userId = await getUserFromToken(decoded, req, res);

    // Create List
    const list = await createList(data);

    // Add list to user's lists
    const listId = list._id;
    const updatedUser = await updateUserLists(userId, listId.toHexString());
    return res.status(200).json({ list });
  } catch (error) {
    return res.status(500).json(error);
  }
}
