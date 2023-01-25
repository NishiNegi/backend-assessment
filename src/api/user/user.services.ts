import mongoose, {DocumentDefinition, FilterQuery, ObjectId} from "mongoose";
import User, {UserDocument} from './user.model';

// Create user
export function createUser(user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>) {
    return User.create(user);
  }

// Get user by filter
export function getUserFilter(filter: FilterQuery<UserDocument>) {
  const user = User.findOne(filter);
  return user;
}
// Update user
export function updateUser(id: string, user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>) {
  return User.findByIdAndUpdate(id, user, {new: true});
}

// add a list to user
export function updateUserLists(userId: string, listId: string) {
  const listIdObject = new mongoose.Types.ObjectId(listId);
  const user = { $push: { lists: listIdObject } };
  return User.updateOne({ _id: userId }, user);
}