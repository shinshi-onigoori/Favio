"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { keyframes, styled } from "styled-components";

const SignInForm = () => {
  const router = useRouter();
  const { status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("Favioにダイブしています ...");
    try {
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if(!signInResponse || signInResponse.ok !== true){
        setMessage("そのアカウントは無効です");
      } else {
        router.refresh();
      };

    } catch (err) {
        console.log(err);
    }
    setMessage(message);
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.refresh();
      router.push("/");
    }
  }, [router, status]);

  return (
    <SignInFormContainer>
      <MVBlock>
        <h1>Favio</h1>
      </MVBlock>
      <FormBlock>
        <h1>Sign In</h1>
        <EmailInput
          type="text"
          placeholder="メールアドレスを入力してください"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></EmailInput>
        <PasswordInput
          type="password"
          placeholder="パスワードを入力してください"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></PasswordInput>
        <SignInButton onClick={handleSubmit}>Sign In</SignInButton>
      </FormBlock>
      <p>{message}</p>
    </SignInFormContainer>
  );
};

const SignInFormContainer = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 3px solid #f3f3f3;
  border-radius: 1rem;
`;

const MVBlock = styled.div`
  flex: 1.2;
  margin: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 1rem;
  background-color: #541343;

  h1 {
    font-family: "Arial", sans-serif;
    font-weight: bolder;
    font-size: 5rem;
    color: #df00a3;
  }
  @media screen and (max-width: 789px) {
    display: none;
  }
`;

const FormBlock = styled.div`
  flex: 1;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  background-color: #ffffff;
  box-sizing: border-box;
  h1 {
    text-align: center;
    font-size: 2rem;
    color: #df00a3;
    font-weight: bold;
    margin-bottom: 10%;
  }
`;
const EmailInput = styled.input`
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  color: #000;
  border: 1px solid #dfdfdf;
  border-radius: 0.5rem;
  outline: none;
  &:focus {
    border-color: #df00a3;
  }
`;
const PasswordInput = styled.input`
  margin-top: 5%;
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  color: #000;
  border: 1px solid #dfdfdf;
  border-radius: 0.5rem;
  outline: none;
  &:focus {
    border-color: #df00a3;
  }
`;
const SignInButton = styled.button`
  margin-top: 10%;
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #df00a3;
  background: linear-gradient(to right, #df00a3, #e33be9);
  color: #fff;
  border-radius: 0.5rem;
  transition: linear 0.5s;

  &:hover {
    background: #fff;
    color: #df00a3;
  }
`;

export default SignInForm;
