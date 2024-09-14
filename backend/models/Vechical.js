import mongoose from "mongoose";

const vechicalSchema = new mongoose.Schema(
{
    title: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
        type: String,
        required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Vechical", vechicalSchema);
