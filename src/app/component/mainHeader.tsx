"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";
import PostButton from "./postButton";
import Link from "next/link";

type MainHeaderProps = {
  children: ReactNode;
};

const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <Link href={"/"}>Favio</Link>
      </HeaderTitle>
      {children}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff; /* Change to your desired blue color */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 800;
  color: #df00a3; /* Change to your desired text color */
`;

export default MainHeader;
