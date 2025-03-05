import { prisma } from "@/lib/prismaClient";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

type argsType = {
  userId: string | null | undefined;
  userName: string | null | undefined;
  userEmail: string | null | undefined;
  userImage: string | null | undefined;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.provider = account.provider;
        token.id = account.providerAccountId;

        const args: argsType = {
          userId: account.providerAccountId,
          userName: profile?.name,
          userEmail: profile?.email,
          userImage: profile?.avatar_url,
        };

        console.log(args);

        if (args === null || undefined) {
          return token;
        }

        await prisma.user.upsert({
          where: {
            id: args.userId || "",
          },
          update: {
            username: args.userName || "",
            email: args.userEmail || "",
            iconUrl: args.userImage || "",
          },
          create: {
            id: args.userId || "",
            username: args.userName || "",
            email: args.userEmail || "",
            iconUrl: args.userImage || "",
          },
        });
      }
      return token;
    },

    async session({ session, token }: any) {
      session.user.provider = token.provider;
      session.user.id = token.id;
      return session;
    },
  },
});
