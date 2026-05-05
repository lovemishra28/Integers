"use server";

import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function submitContactForm(formData: FormData) {
  try {
    await connectToDatabase();
    
    // Extract data from the form
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    // Save to MongoDB
    const newContact = new Contact(data);
    await newContact.save();

    return { success: true };
  } catch (error) {
    console.error("Failed to save contact message:", error);
    return { success: false, error: "Failed to send message." };
  }
}
