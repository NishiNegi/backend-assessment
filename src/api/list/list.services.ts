import {DocumentDefinition, FilterQuery} from "mongoose";
import List, {ListDocument, FavDocument} from './list.model';
import User from '../user/user.model'

// Create a list
export function createList(list:DocumentDefinition<Omit<ListDocument, 'createdAt' | 'updatedAt'>>){
    return List.create(list);
}

// Get all user's lists
export function getUserLists(userId: string) {
    return User.findById(userId).populate("lists").exec();
  }

  // Get a specific list
export function getListById(listId: string) {
    return List.findById(listId);
  }

// Check if a list is in user's lists
export function isListInUsers(listId: string, userLists: any[]): boolean {
    return userLists.some(item => item._id.toString() === listId);
}
// Delete a specific list
export function deleteList(id: string) {
    return List.findByIdAndRemove(id);
  }
// Update a specific list favs
export function updateFavs(listId: string, fav: FavDocument){
  console.log(List.findByIdAndUpdate(listId, { $push: { items: fav } }))
  return List.findByIdAndUpdate(listId, { $push: { items: fav } });
}