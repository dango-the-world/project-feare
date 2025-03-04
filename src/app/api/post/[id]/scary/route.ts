import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postId = params.id;

    // 投稿の `scaryCount` を増やす
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { scaryCount: { increment: 1 } },
    });

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    console.error("Error updating scary count:", error);
    return NextResponse.json(
      { error: "Failed to update scary count" },
      { status: 500 }
    );
  }
}
