import { Request, Response } from "express";
import crypto from "crypto";
import { createUser } from "./user.services";

export async function handleCreateUser(req: Request, res: Response) {
  console.log("in handleCreateUser");
  const data = req.body;
  const newUser = data;
  try {
    //Create user
    const user = await createUser(data);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}
