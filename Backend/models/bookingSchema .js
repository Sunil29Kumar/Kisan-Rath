import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    truck: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Truck",
    },

    pickupLocation: String,
    dropLocation: String,

    cropType: String,
    weightTon: Number,

    price: Number,

    status: {
      type: String,
      enum: [
        "PENDING",
        "ACCEPTED",
        "IN_TRANSIT",
        "COMPLETED",
        "CANCELLED",
      ],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
