import { prisma } from "@/lib/prizma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true, // 投稿したユーザー情報を含む
      },
      orderBy: {
        createdAt: "desc", // 作成日時で降順に並べる
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
