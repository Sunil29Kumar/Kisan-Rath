import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },

    truck: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Truck",
      required: true,
    },

    startTime: Date,
    endTime: Date,

    currentStatus: {
      type: String,
      enum: ["STARTED", "ON_THE_WAY", "DELIVERED"],
    },

    currentLocation: {
      lat: Number,
      lng: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Trip", tripSchema);
