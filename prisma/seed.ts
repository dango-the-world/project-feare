import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ユーザーデータの作成
  const user1 = await prisma.user.create({
    data: {
      username: "scary_teller_1",
      email: "scary_teller_1@example.com",
      passwordHash: "hashed_password_1",
      iconUrl: null,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "scary_teller_2",
      email: "scary_teller_2@example.com",
      passwordHash: "hashed_password_2",
      iconUrl: null,
    },
  });

  // 投稿データの作成
  await prisma.post.createMany({
    data: [
      {
        id: "post-1",
        userId: user1.id,
        title: "深夜に聞こえた不気味な声",
        content: "ある夜、突然奇妙な声が家の中で聞こえ始めた…",
        tags: "深夜,奇妙,声",
        headerImageUrl: null,
        scaryCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "post-2",
        userId: user2.id,
        title: "山中の恐怖体験",
        content:
          "山を歩いていた時、誰かに見られているような感覚が消えなかった…",
        tags: "山,恐怖,視線",
        headerImageUrl: null,
        scaryCount: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  });

  console.log("Seeding completed!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
