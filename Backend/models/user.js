import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
        type: String,
    },

    email: {
      type: String,
    },

    mobile: {
      type: String,
    },

    role: {
      type: String,
      enum: ["farmer", "truck"],
    },

    language: {
      type: String,
      enum: ["hi", "gu", "en"],
      default: "hi",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true,
    strict: true
   }
);

export default mongoose.model("User", userSchema);
