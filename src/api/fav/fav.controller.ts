import { Request, Response } from "express";
import {createFav} from "./fav.services";

export async function handleCreateFav(req:Request, res:Response){
    const data = req.body;
    try {
        // Create List
        const list = await createFav(data);
        return res.status(200).json(list);
    } catch (error) {
        return res.status(500).json(error);
    }
}