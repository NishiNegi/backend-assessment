import { Schema, model, Document } from "mongoose";

export interface ListDocument extends Document {
  name: string;
  items?: string[];

  createdAt: Date;
  updatedAt: Date;
}

const ListSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    items: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const List = model("List", ListSchema);

export default List;