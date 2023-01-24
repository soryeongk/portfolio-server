import mongoose from "mongoose";

import { ActivityInfo } from "../interfaces/activity/ActivityInfo";

const ActivitySchema = new mongoose.Schema({
  date: {
    from: {
      type: Date,
    },
    to: {
      type: Date,
      required: true,
    },
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  url: {
    type: String,
  },
});

export default mongoose.model<ActivityInfo & mongoose.Document>("Activity", ActivitySchema);
