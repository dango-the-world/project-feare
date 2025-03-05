import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title, content, tags } = await req.json();
    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    // 固定の userId を使用
    const userId = "1";

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
    console.error("Error creating post:", error.message);
    return NextResponse.json(
      { error: "Failed to create post", details: error.message },
      { status: 500 }
    );
  }
}
