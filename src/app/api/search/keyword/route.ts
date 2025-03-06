import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { message: "検索キーワードを提供してください" },
      { status: 400 }
    );
  }

  try {
    const results = await prisma.post.findMany({
      include: {
        user: true, // 投稿したユーザー情報を含む
      },
      where: {
        title: {
          contains: query || undefined,
          mode: "insensitive",
        },
      },
    });
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "検索中にエラーが発生しました", error },
      { status: 500 }
    );
  }
}
