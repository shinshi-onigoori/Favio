"use Client"

import React, { ReactNode } from "react";
import Link from "next/link";

export type EditHeaderProps = {
  children: React.ReactNode;
}

const MainHeader = ({children}: EditHeaderProps) => {
  console.log("EditHeader");

  return (
    <>
      <div className="w-full px-4 py-4 flex justify-between flex-row gap-4 shadow-md items-center">
        <Link href={"/"} className="text-favio-purple text-center text-2xl font-extrabold items-center">Favio</Link>
        {children}
      </div>
    </>
  );
};

export default MainHeader;
