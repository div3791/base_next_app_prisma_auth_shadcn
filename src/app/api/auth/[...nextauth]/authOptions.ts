import { db } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GithubProvider({
            clientId: '',
            clientSecret: ''
        })
    ]
}