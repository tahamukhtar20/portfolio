import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  let messages;
  try {
    messages = await prisma.sign.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
      take: 100,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "An error occurred" }), {
      headers: { "content-type": "application/json" },
      status: 500,
    });
  }
  if (!messages) return new NextResponse(null, { status: 404 });
  return new NextResponse(JSON.stringify(messages), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}

export async function POST(request: Request) {
  const req = await request.json();
  try {
    const session = await getServerSession(authOptions);
    if (!session) return;
    const message = req.message;
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
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(JSON.stringify({ error: "An error occurred" }), {
      headers: { "content-type": "application/json" },
      status: 500,
    });
  }
  return new NextResponse(JSON.stringify({ message: "Data Updated" }), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}
