"use server";

import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function submitContactForm(formData: FormData) {
  try {
    await connectToDatabase();
    
    // Extract data from the form
    const rawName = (formData.get("name") || "").toString().trim();
    let firstName = (formData.get("firstName") || "").toString().trim();
    let lastName = (formData.get("lastName") || "").toString().trim();

    if (!firstName && rawName) {
      const parts = rawName.split(/\s+/);
      firstName = parts[0] || rawName;
      lastName = parts.slice(1).join(" ") || "Lead";
    }

    const data = {
      firstName: firstName || "Anonymous",
      lastName: lastName || "Contact",
      email: (formData.get("email") || "").toString().trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      message: (formData.get("message") || "General Inquiry").toString().trim(),
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

/**
 * Server action dedicated to Free Website Audit requests.
 * Extracts URL, Name, and Email and saves structured lead record to MongoDB.
 */
export async function submitWebsiteAuditAction(formData: FormData) {
  try {
    await connectToDatabase();

    const rawUrl = (formData.get("url") || "").toString().trim();
    const rawName = (formData.get("name") || "").toString().trim();
    const rawEmail = (formData.get("email") || "").toString().trim();
    const rawPhone = (formData.get("phone") || "").toString().trim();

    if (!rawUrl || !rawName || !rawEmail) {
      return {
        success: false,
        error: "Please provide your website URL, full name, and email address.",
      };
    }

    // Basic email validation
    if (!rawEmail.includes("@") || !rawEmail.includes(".")) {
      return {
        success: false,
        error: "Please enter a valid business or personal email address.",
      };
    }

    // Split name
    const parts = rawName.split(/\s+/);
    const firstName = parts[0] || rawName;
    const lastName = parts.slice(1).join(" ") || "Audit Lead";

    const message = [
      `[FREE WEBSITE AUDIT REQUEST]`,
      `Target Website URL: ${rawUrl}`,
      `Lead Name: ${rawName}`,
      `Email Address: ${rawEmail}`,
      rawPhone ? `Phone / WhatsApp: ${rawPhone}` : `Phone: Not provided`,
      `Source: /free-website-audit`,
    ].join("\n");

    const newContact = new Contact({
      firstName,
      lastName,
      email: rawEmail,
      phone: rawPhone || "N/A (Audit Request)",
      message,
      notes: `Free Website Audit requested for: ${rawUrl}`,
      status: "new",
    });

    await newContact.save();

    return {
      success: true,
      url: rawUrl,
      name: rawName,
    };
  } catch (error) {
    console.error("Failed to process website audit request:", error);
    return {
      success: false,
      error: "Our audit server encountered an error. Please try again or reach out on WhatsApp.",
    };
  }
}
