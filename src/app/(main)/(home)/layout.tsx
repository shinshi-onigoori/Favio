import React from "react";
import MainHeader from "@/app/components/mainHeader";
import Link from "next/link";
import PostButton from "@/app/components/postButton";
import GoToSignInButton from "@/app/components/auth/goToSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface homeLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const HomeLayout = async ({ children }: homeLayoutProps) => {
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

export default HomeLayout;