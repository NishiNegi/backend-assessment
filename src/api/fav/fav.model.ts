import { Schema, model, Document } from "mongoose";

export interface FavDocument extends Document {
  title: string;
  description: string;
  link: string;

  createdAt: Date;
  updatedAt: Date;
}

const FavSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
            capitalize :true,
        },
        description:{
            type: String,
            required: true,
        },
        link:{
            type: String,
            lowercase:true,
        }
    },
    {
        timestamps: true,
      }
);

const Fav = model("Fav", FavSchema);

export default Fav;
