"use client";

import SignUpForm from "@/app/components/auth/signUpForm";
import React, { ReactNode } from "react";
import styled from "styled-components";

type SignUpPageProps = {
  children?: ReactNode | React.ReactNode[];
};

const SignUpPage: React.FC<SignUpPageProps> = ({ children }) => {
  return (
    <React.Fragment>
      <SignUpPageContainer>
        <SignUpForm />
      </SignUpPageContainer>
    </React.Fragment>
  );
};

const SignUpPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: hsl(300, 100%, 100%);
`;

export default SignUpPage;
