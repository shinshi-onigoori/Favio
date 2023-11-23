"use client";

import SignInForm from "@/app/components/auth/signInForm";
import React from "react";
import { styled } from "styled-components";

const SignInpage = () => {
  return (
    <React.Fragment>
      <SignInPageContainer>
        <SignInForm />
      </SignInPageContainer>
    </React.Fragment>
  );
};

const SignInPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: hsl(300, 100%, 100%);
`;

export default SignInpage;
