"use server";

import { prisma } from "@/lib/prisma";
import { getDbUserID } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, image: string) {
  try {
    const userId = await getDbUserID();

    const post = await prisma.post.create({
      data: {
        content,
        image,
        authorId: userId,
      },
    });
    revalidatePath("/");
    return { success: true, post };
  } catch (error) {
    return { success: false, message: error || "Failed to create post." };
  }
}
