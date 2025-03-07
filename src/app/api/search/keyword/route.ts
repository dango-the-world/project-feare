import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = 10; // 1ページあたりの表示件数

  if (!query) {
    return NextResponse.json(
      { message: "検索キーワードを提供してください" },
      { status: 400 }
    );
  }

  try {
    const totalCount = await prisma.post.count({
      where: {
        title: {
          contains: query || undefined,
          mode: "insensitive",
        },
      },
    });

    const results = await prisma.post.findMany({
      take: pageSize, // 取得件数
      skip: (page - 1) * pageSize, // スキップする件数
      include: {
        user: true,
      },
      where: {
        title: {
          contains: query || undefined,
          mode: "insensitive",
        },
      },
    });

    return NextResponse.json({
      results,
      totalCount,
      totalPages: Math.ceil(totalCount / pageSize),
      currentPage: page,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "検索中にエラーが発生しました", error },
      { status: 500 }
    );
  }
}
