"use server";

import { adminDb } from "../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { revalidatePath } from "next/cache";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "superadmin123";

export async function createDelivery(data, password) {
  if (password !== ADMIN_PASSWORD) {
    throw new Error("Unauthorized: Incorrect password");
  }

  try {
    const docRef = await adminDb.collection("projectDeliveries").add({
      ...data,
      createdAt: new Date().toISOString()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error creating delivery:", error);
    throw new Error("Failed to create project delivery in database");
  }
}

export async function getDeliveries(password) {
  if (password !== ADMIN_PASSWORD) {
    throw new Error("Unauthorized: Incorrect password");
  }

  try {
    const snapshot = await adminDb.collection("projectDeliveries").orderBy("createdAt", "desc").get();
    const deliveries = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return { success: true, deliveries };
  } catch (error) {
    console.error("Error fetching deliveries:", error);
    throw new Error("Failed to fetch project deliveries");
  }
}

export async function deleteDelivery(id, password) {
  if (password !== ADMIN_PASSWORD) {
    throw new Error("Unauthorized: Incorrect password");
  }

  try {
    await adminDb.collection("projectDeliveries").doc(id).delete();
    return { success: true };
  } catch (error) {
    console.error("Error deleting delivery:", error);
    throw new Error("Failed to delete project delivery");
  }
}

export async function updateDelivery(id, data, password) {
  if (password !== ADMIN_PASSWORD) {
    throw new Error("Unauthorized: Incorrect password");
  }

  try {
    await adminDb.collection("projectDeliveries").doc(id).update(data);
    return { success: true };
  } catch (error) {
    console.error("Error updating delivery:", error);
    throw new Error("Failed to update project delivery");
  }
}

export async function markAsPaid(id, userEmail = null) {
  try {
    const updateData = {
      paymentStatus: "Paid",
      paidAt: new Date().toISOString()
    };
    
    if (userEmail) {
      updateData.unlockedBy = FieldValue.arrayUnion(userEmail);
    }
    
    await adminDb.collection("projectDeliveries").doc(id).update(updateData);
    return { success: true };
  } catch (error) {
    console.error("Error marking as paid:", error);
    return { success: false };
  }
}

export async function markAsDownloaded(id) {
  try {
    await adminDb.collection("projectDeliveries").doc(id).update({
      downloadCount: FieldValue.increment(1),
      lastDownloadedAt: new Date().toISOString()
    });
    revalidatePath("/admin/deliveries");
    return { success: true };
  } catch (error) {
    console.error("Error marking as downloaded:", error);
    return { success: false };
  }
}

export async function getProjectDeliveriesForUser(email) {
  try {
    const snapshot = await adminDb.collection("projectDeliveries")
      .where("unlockedBy", "array-contains", email)
      .get();
      
    const deliveries = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Sort by createdAt descending in memory to avoid needing a Firestore composite index
    deliveries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    return { success: true, deliveries };
  } catch (error) {
    console.error("Error fetching user deliveries:", error);
    return { success: false, error: error.message };
  }
}
