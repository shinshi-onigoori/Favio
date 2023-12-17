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

const MainLayout = async ({ children }: mainLayoutProps) => {
  // const session = await getServerSession(authOptions);

  return (
    <>
      {children}
    </>
  );
};

export default MainLayout;
