import mongoose from "mongoose";

const truckSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    truckNumber: {
      type: String,
      required: true,
      unique: true,
    },

    truckType: {
      type: String,
      enum: ["MINI", "MEDIUM", "HEAVY"],
      required: true,
    },

    capacityTon: Number,

    isAvailable: {
      type: Boolean,
      default: true,
    },

    currentLocation: {
      city: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Truck", truckSchema);
