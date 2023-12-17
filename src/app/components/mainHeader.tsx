import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import GoToSignInButton from "./auth/goToSignInButton";
import PostButton from "./postButton";
import { Session } from "next-auth";

type MainHeaderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const MainHeader = async ({ children }: MainHeaderProps) => {
  console.log("MainHeader");
  // const session = await getServerSession(authOptions);

  return (
      <div className="w-full px-4 py-4 flex justify-between flex-row gap-4 shadow-md items-center">
        <Link
          href={"/"}
          className="text-favio-purple text-center text-2xl font-extrabold items-center"
        >
          Favio
        </Link>
        {children}
      </div>
  );
};

export default MainHeader;
