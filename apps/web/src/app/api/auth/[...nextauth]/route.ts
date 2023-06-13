import { ApiRoute } from "@/app/api/api-route";
import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [],
}) as ApiRoute;

export { handler as GET, handler as POST };
