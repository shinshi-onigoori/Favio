"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import styled from "styled-components";
import MainHeader from "@/app/components/mainHeader";

const API_HOST = process.env["NEXT_PUBLIC_API_HOST"];

const postBlog = async (
  title: string | undefined,
  description: string | undefined
) => {
  const res = await fetch(`${API_HOST}/api/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });

  return res.json();
};

const AddBlogPage = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    //Hooksが動いているか確認用
    console.log("確認");
    // console.log(descriptionRef.current?.value);

    toast.loading("投稿中です...", { id: "1" });
    await postBlog(titleRef.current?.value, descriptionRef.current?.value);
    toast.success("投稿に成功しました");

    router.push("/");
    router.refresh();
  };

  return (
    <>
      <BlogAddContainer>
        <Toaster />
        {/* <MainHeader> */}
          <BlogSubmitButton type="submit" onClick={handleClick}>
            投稿
          </BlogSubmitButton>
        {/* </MainHeader> */}
        <BlogFormContainer>
          <form>
            <TitleInput
              ref={titleRef}
              placeholder="タイトルを入力"
              type="text"
            />
            <DescriptionInput
              ref={descriptionRef}
              placeholder="記事詳細を入力"
            />
          </form>
        </BlogFormContainer>
      </BlogAddContainer>
    </>
  );
};

const BlogAddContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const BlogFormContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border-radius: 4px;
  background-color: #f2f2f2;
`;

const DescriptionInput = styled.textarea`
  width: 100%;
  height: 500px;
  padding: 8px;
  margin: 8px 0;
  border-radius: 4px;
  background-color: #f2f2f2;
`;

const BlogSubmitButton = styled.button`
  box-sizing: border-box;
  font-weight: 600;
  padding: 8px 16px;
  color: #fff;
  border: 2px solid #df00a3;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  background-color: #df00a3;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #fbebfc;
    color: #df00a3;
  }
`;

export default AddBlogPage;
