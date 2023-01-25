import { Request, Response } from "express";
import {createList} from "./list.services";

export async function handleCreateList(req:Request, res:Response){
    const data = req.body;
    try {
        // Create List
        const list = await createList(data);
        return res.status(200).json(list);
    } catch (error) {
        return res.status(500).json(error);
    }
}