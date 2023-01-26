import { Schema, model, Document } from "mongoose";

export interface FavDocument {
  title: string;
  description: string;
  link: string;
}
export interface ListDocument extends Document {
  name: string;
  items?: FavDocument[];

  createdAt: Date;
  updatedAt: Date;
}

const FavSchema = new Schema(
  {
    title:{
      type: String,
      required: true,
      capitalize: true,
    } ,
    description: String, 
    link: String
  }
)

const ListSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    items: [{ type: FavSchema }],
  },
  {
    timestamps: true,
  }
);

const List = model("List", ListSchema);

export default List;