"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function getMessages() {
  return prisma.sign.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 100,
    include: {
      user: true,
    },
  });
}

export async function submitSignature(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session) return;
  const message = formData.get("message");
  if (!message) return;
  if (!session?.user?.email) return;
  const user = await prisma.user.upsert({
    where: { email: session?.user?.email },
    update: {},
    create: {
      name: session.user.name || "Anonymous",
      email: session.user.email,
    },
  });
  const query = await prisma.sign.create({
    data: {
      sign: message.toString(),
      userId: user.id,
    },
  });
  revalidatePath("/guestbook");
}
