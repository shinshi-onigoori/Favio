"use client";

import MainHeader from "@/app/component/mainHeader";
import BlogContentDetail from "@/app/component/portfolio/detail/BlogContentDetail";
import PostButton from "@/app/component/postButton";
import { PostType } from "@/types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";

const API_HOST = process.env["API_HOST"];

const getBlogById = async (id: number) => {
  const res = await fetch(`${API_HOST}/api/blog/${id}`, {});

  const data = await res.json();
  console.log(data);

  return data.post;
};

const BlogContentDetailPage = ({ params }: { params: { id: number } }) => {
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogById(params.id);
        setPost(data);
      } catch (error) {
        toast.error("エラーが発生しました", { id: "1" });
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <BlogContentDetailContainer>
      <MainHeader>
        <PostButton></PostButton>
      </MainHeader>
      <ContentDetailBlock>
        {post && <BlogContentDetail post={post} />}
      </ContentDetailBlock>
    </BlogContentDetailContainer>
  );
};

const BlogContentDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const ContentDetailBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-color: #eeeaec;
`;

export default BlogContentDetailPage;
