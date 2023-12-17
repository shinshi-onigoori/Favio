"use client";

import React, { useEffect } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import styled from "styled-components";
import MainHeader from "@/app/components/mainHeader";
import SepalateBorder from "@/app/components/sepalateBorder";
import EditHeader from "@/app/components/editHeader";

const API_HOST = process.env["NEXT_PUBLIC_API_HOST"];

const editBlog = async (
  title: string | undefined,
  description: string | undefined,
  id: number
) => {
  const res = await fetch(`${API_HOST}/api/blog/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, id }),
  });

  return res.json();
};

const getBlogById = async (id: number) => {
  const res = await fetch(`${API_HOST}/api/blog/${id}`, {});

  const data = await res.json();
  console.log(data);

  return data.post;
};

const deleteBlog = async (id: number) => {
  const res = await fetch(`${API_HOST}/api/blog/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

const EditPostPage = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast.loading("編集中です...", { id: "1" });
    await editBlog(
      titleRef.current?.value,
      descriptionRef.current?.value,
      params.id
    );
    toast.success("編集に成功しました");

    router.push("/");
    router.refresh();
  };

  const handleDelete = async () => {
    toast.loading("削除中です...", { id: "1" });
    await deleteBlog(params.id);

    router.push("/");
    router.refresh();
  };

  useEffect(() => {
    getBlogById(params.id)
      .then((data) => {
        console.log(data);
        if (titleRef.current && descriptionRef.current) {
          titleRef.current.value = data.title;
          descriptionRef.current.value = data.description;
        }
      })
      .catch((err) => {
        toast.error("エラーが発生しました", { id: "1" });
      });
  }, [params.id]);

  return (
    <BlogEditContainer>
      <EditHeader>
        <BlogEditSubmitButton type="submit" onClick={handleSubmit}>
          編集を保存
        </BlogEditSubmitButton>
      </EditHeader>
      <BlogBlogEditFormContainer>
        <form>
          <TitleEditInput
            ref={titleRef}
            placeholder="タイトルを入力"
            type="text"
          />
          <DescriptionEditInput
            ref={descriptionRef}
            placeholder="記事詳細を入力"
          />
        </form>
      </BlogBlogEditFormContainer>
      <SepalateBorder />
      <OtherOption>
        <DengerZone>
          <DengerActionName>このBlogを削除しますか？</DengerActionName>
          <BlogDeleatButton onClick={handleDelete}>削除</BlogDeleatButton>
        </DengerZone>
      </OtherOption>
    </BlogEditContainer>
  );
};

const BlogEditContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

const BlogBlogEditFormContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px;
`;

const TitleEditInput = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border-radius: 4px;
  background-color: #f2f2f2;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
`;

const DescriptionEditInput = styled.textarea`
  width: 100%;
  height: 500px;
  padding: 8px;
  margin: 8px 0;
  border-radius: 4px;
  background-color: #f2f2f2;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
`;

const BlogEditSubmitButton = styled.button`
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

const OtherOption = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px 10px 50px 10px;
  border-radius: 10px;
  background-color: #fff;
`;

const DengerZone = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #e90000;
`;

const DengerActionName = styled.div`
  width: 100%;
  padding: 10px;
  font-weight: 500;
`;

const BlogDeleatButton = styled.div`
  box-sizing: border-box;
  width: 150px;
  font-weight: 600;
  padding: 8px 16px;
  color: #fff;
  text-align: center;
  border: 2px solid #e90000;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  background-color: #e90000;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ffffff;
    color: #e90000;
  }
`;

export default EditPostPage;
