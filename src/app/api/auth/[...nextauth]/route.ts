import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, profile }: any) {
      if (profile?.html_url) {
        return {
          ...token,
          githubProfile: profile.html_url,
        };
      }

      return token;
    },
    async session({ token, session }) {
      if (token.githubProfile) {
        if (session.user) {
          session.user = {
            ...session.user,
            githubProfile: token.githubProfile,
          } as any;
        }
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
