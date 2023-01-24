import mongoose from "mongoose";

import { CommentInfo } from "../interfaces/comment/CommentInfo";

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<CommentInfo & mongoose.Document>("Comment", CommentSchema);
