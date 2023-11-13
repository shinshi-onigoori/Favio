"use client";

import React from "react";
import styled from "styled-components";

const SignInButton = () => {
  return (
    <SignInButtonContainer>
      <Button href="/pages/signin">ログイン</Button>
    </SignInButtonContainer>
  );
};

const SignInButtonContainer = styled.div`
  display: flex;
  width: 150px;
  position: relative; // 相対位置
  border-radius: 5px;
  display: inline-block; // インラインブロック要素
  background-color: #df00a3;
  cursor: pointer; // カーソルをポインターに変更
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

export default SignInButton;
