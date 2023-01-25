import {DocumentDefinition, FilterQuery} from "mongoose";
import List, {ListDocument} from './list.model';

// Create a list
export function createList(list:DocumentDefinition<Omit<ListDocument, 'createdAt' | 'updatedAt'>>){
    return List.create(list);
}