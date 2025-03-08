import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "../../../../auth";

export async function POST(req: Request) {
  const session = await auth();

  try {
    const { title, content, tags } = await req.json();
    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const userId = session?.user?.id || "";

    const newPost = await prisma.post.create({
      data: {
        userId,
        title,
        content,
        tags,
        scaryCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error creating post:", error.message);
    } else {
      console.error("Error creating post:", error);
    }
    return NextResponse.json(
      { error: "Failed to create post", details: (error as Error).message },
      { status: 500 }
    );
  }
}
