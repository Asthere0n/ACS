import { Schema, model } from "mongoose";

const childrenSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, default: true }
  },
  { timestamps: true }
);

export default model("Child", childrenSchema);