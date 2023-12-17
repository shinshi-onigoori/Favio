import React from "react";
import MainHeader from "../components/mainHeader";
import Link from "next/link";
import PostButton from "../components/postButton";
import GoToSignInButton from "../components/auth/goToSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

interface mainLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const AuthLayout = async ({ children }: mainLayoutProps) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <MainHeader>
        <Link href={"/protected/dashboard"}>Dashboard</Link>
        {session && session.user?.email ? (
          <>
            <Link href={"/signout"}>SignOut</Link>
            <p>Sign in as {session.user?.email}</p>
            <PostButton />
          </>
        ) : (
          <>
            <GoToSignInButton />
          </>
        )}
      </MainHeader>
      {children}
    </>
  );
};

export default AuthLayout;
