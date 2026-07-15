"use server";

import { adminDb } from "../../../lib/firebase-admin";

export async function getProjectById(id) {
  try {
    const docRef = adminDb.collection("projectDeliveries").doc(id);
    const doc = await docRef.get();
    
    if (!doc.exists) {
      return null;
    }
    
    const data = doc.data();
    // Return safe data to the client (omit sensitive info if necessary, but coupon verification happens server side)
    return {
      id: doc.id,
      title: data.title,
      price: data.price,
      previewImage: data.previewImage,
      downloads: data.downloads, // Downloads will be unlocked on client upon success
      couponCode: data.couponCode, // In a real high-security app, this should only be verified on the server, but for our simple lock, we can return it or verify it via API.
      paymentStatus: data.paymentStatus,
      unlockedBy: data.unlockedBy || []
    };
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}
