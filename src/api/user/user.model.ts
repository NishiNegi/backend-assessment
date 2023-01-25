import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document{
  email:String,
  password:String,
  lists?:string[]

  createdAt: Date;
  updatedAt: Date;
}
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  lists: [{ type: String }],
},
{
  timestamps: true,
});

const User = model<UserDocument>("User", UserSchema);

export default User;
