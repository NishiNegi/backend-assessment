import { Request, Response } from "express";
import {
  createList,
  getUserLists,
  getListById,
  isListInUsers,
  deleteList,
  updateFavs,
} from "./list.services";
import {
  verifyToken,
  getUserFromToken,
  JWTDecoded,
} from "../../auth/auth.services";
import { updateUserLists } from "../user/user.services";

export async function handleCreateList(req: Request, res: Response) {
  const data = req.body;
  try {
    // verify user token from header
    const userToken = req.headers?.authorization?.split(" ")[1] as string;
    const decoded = verifyToken(userToken) as JWTDecoded;

    // get user by id from token
    const userId = await getUserFromToken(decoded);

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

export async function handleGetAllLists(req: Request, res: Response) {
  try {
    // verify user token from header
    const userToken = req.headers?.authorization?.split(" ")[1] as string;
    const decoded = verifyToken(userToken) as JWTDecoded;

    // get user by id from token
    const userId = await getUserFromToken(decoded);

    // get user's lists
    const user = await getUserLists(userId);
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist." });
    }
    if (!user.lists) {
      return res
        .status(404)
        .json({ message: "user don't have any list yet. " });
    }
    const lists = user.lists;

    return res.status(200).json(lists);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleGetList(req: Request, res: Response) {
  //get list id from endpoint parameters
  const { id } = req.params;
  try {
    // verify user token from header
    const userToken = req.headers?.authorization?.split(" ")[1] as string;
    const decoded = verifyToken(userToken) as JWTDecoded;

    // get user by id from token
    const userId = await getUserFromToken(decoded);

    //get list
    const list = await getListById(id);

    //get user's data
    const user = await getUserLists(userId);
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist." });
    }
    if (!user.lists) {
      return res
        .status(404)
        .json({ message: "user don't have any list yet. " });
    }
    const lists = user.lists;

    const exist = isListInUsers(id, lists);

    if (!exist) {
      return res
        .status(401)
        .json({ message: "user is not authorized to consult this list" });
    }
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleDeleteList(req: Request, res: Response) {
  //get list id from endpoint parameters
  const { id } = req.params;
  try {
    // verify user token from header
    const userToken = req.headers?.authorization?.split(" ")[1] as string;
    const decoded = verifyToken(userToken) as JWTDecoded;

    // get user by id from token
    const userId = await getUserFromToken(decoded);

    //get list
    const list = await getListById(id);

    //get user's data
    const user = await getUserLists(userId);
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist." });
    }
    if (!user.lists) {
      return res
        .status(404)
        .json({ message: "user don't have any list yet. " });
    }
    const lists = user.lists;

    const exist = isListInUsers(id, lists);

    if (!exist) {
      return res
        .status(401)
        .json({ message: "user is not authorized to delete this list" });
    }
    const deletedList = await deleteList(id);
    return res.status(200).json({ message: "List has been removed." });
  } catch (error) {
    return res.status(500).json(error);
  }
}
export async function handleUpdateItems(req: Request, res: Response) {
  
  //get list id from endpoint parameters
  const { id } = req.params;
  
  try {
    // verify user token from header
    const userToken = req.headers?.authorization?.split(" ")[1] as string;
    
    const decoded = verifyToken(userToken) as JWTDecoded;
    // get user by id from token
    const userId = await getUserFromToken(decoded);
    //get list
    let list = await getListById(id);
    //get user's data
    const user = await getUserLists(userId);


    if (!user) {
      return res.status(404).json({ message: "User doesn't exist." });
    }

    if (!user.lists) {
      return res.status(404).json({ message: "user don't have any list yet. " });
    }
    const lists = user.lists;
    

    const exist = isListInUsers(id, lists);

    if (!exist) {
      return res
        .status(401)
        .json({ message: "user is not authorized to update this list" });
    }
    // Include items in list
    const newItem = req.body;
    
    const addItem = await updateFavs(id, newItem);
    list = await getListById(id);
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json(error);
  }
}
