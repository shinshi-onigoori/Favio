"use client";

import React from "react";
import styled from "styled-components";

const GoToSignInButton = () => {
  return (
    <GoToSignInButtonContainer>
      <Button href="/signin">ログイン</Button>
    </GoToSignInButtonContainer>
  );
};

const GoToSignInButtonContainer = styled.div`
  display: flex;
  width: 150px;
  position: relative; 
  border-radius: 5px;
  display: inline-block; 
  background-color: #df00a3;
  cursor: pointer; 
`;

const Button = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

export default GoToSignInButton;
