import mongoose, { Schema, models } from "mongoose";

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    text: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    // We'll add an isApproved flag so you have the option to moderate reviews later if needed,
    // though our API will strictly filter for 5-star reviews anyway!
    isApproved: { type: Boolean, default: true }, 
  },
  { timestamps: true }
);

const Review = models.Review || mongoose.model("Review", reviewSchema);

export default Review;
