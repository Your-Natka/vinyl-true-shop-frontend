import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/utils/login";
import { authMe } from "@/utils/authMe";

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    type: "email",
                    label: "Email",
                    placeholder: "johndoe@gmail.com",
                  },
                  password: {
                    type: "password",
                    label: "Password",
                    placeholder: "*****",
                  },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                let loginResponse;
                try {
                    loginResponse = await login({ email: credentials.email, password: credentials?.password });
                } catch (err) {
                    throw err;
                }
                
                let user;
                try {
                    user = await authMe(loginResponse.accessToken);
                } catch (err) {
                    throw err;
                }

                return { ...user, accessToken: loginResponse.accessToken } as User;
            }
        })
    ],
    pages: {
        signIn: "/signup"
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({token, user}){
            return { ...token, ...user };
        },
        async session ({ session, token }) {
            session.user = token;
            return session;
        }
    }
};