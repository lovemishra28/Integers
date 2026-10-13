import mongoose, { Schema, models } from "mongoose";

const contactSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "read", "contacted", "archived"],
      default: "new",
    },
    notes: { type: String, default: "" },
    isStarred: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Contact = models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;