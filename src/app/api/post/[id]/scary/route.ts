import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "../../../../../../auth";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const postId = params.id;

    const existingScary = await prisma.scary.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });

    let scaryCount;
    let isScary;

    if (existingScary) {
      await prisma.scary.delete({
        where: {
          id: existingScary.id,
        },
      });

      const updatedPost = await prisma.post.update({
        where: { id: postId },
        data: {
          scaryCount: { decrement: 1 },
        },
      });

      scaryCount = updatedPost.scaryCount;
      isScary = false;
    } else {
      await prisma.scary.create({
        data: {
          userId,
          postId,
        },
      });

      const updatedPost = await prisma.post.update({
        where: { id: postId },
        data: {
          scaryCount: { increment: 1 },
        },
      });

      scaryCount = updatedPost.scaryCount;
      isScary = true;
    }

    return NextResponse.json({ scaryCount, isScary }, { status: 200 });
  } catch (error) {
    console.error("Error updating scary status:", error);
    return NextResponse.json(
      { error: "Failed to update scary status" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const postId = params.id;

    if (!userId) {
      return NextResponse.json({ isScary: false }, { status: 200 });
    }

    const existingScary = await prisma.scary.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });

    return NextResponse.json({ isScary: !!existingScary }, { status: 200 });
  } catch (error) {
    console.error("Error checking scary status:", error);
    return NextResponse.json(
      { error: "Failed to check scary status" },
      { status: 500 }
    );
  }
}
