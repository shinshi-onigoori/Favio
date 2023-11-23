import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

const MainHeader = async () => {
  console.log("MainHeader");

  // const [session, setSession] = useState<Session | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  const session = await getServerSession(authOptions);
  //     setSession(session);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div className="w-full px-4 py-4 flex flex-row gap-4 shadow-md items-center">
        <Link href={"/"} className="text-favio-purple text-center text-2xl font-extrabold items-center">Favio</Link>
        <Link href={"/prodted/dashboard"}>Dashboard</Link>
        {session && session.user?.email ? (
          <>
            <Link href={"/pages/auth/signout"}>SignOut</Link>
          </>
        ) : (
          <>
            <Link href={"/pages/auth/signin"}>SignIn</Link>

            <Link href={"/pages/auth/signup"}>SignUp</Link>
          </>
        )}
      </div>
    </>
  );
};

// const HeaderContainer = styled.div`
//   position: relative;
//   width: 100%;
//   margin: auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   background-color: #ffffff; /* Change to your desired blue color */
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
// `;

// const HeaderTitle = styled.h1`
//   text-align: left;
//   font-size: 1.5rem;
//   font-weight: 800;
//   color: #df00a3; /* Change to your desired text color */
// `;

export default MainHeader;
