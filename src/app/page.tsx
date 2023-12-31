"use client";

import React, { useEffect, useState } from "react";
import { PostType } from "@/types";
import Link from "next/link";
import styled from "styled-components";
import MainHeader from "./component/mainHeader";
import BlogContent from "./component/portfolio/BlogContent";
import PostButton from "./component/postButton";
import SignInButton from "./component/signInButton";


const API_HOST = process.env["NEXT_PUBLIC_API_HOST"];

const fetchAllBlogs = async () => {
  const res = await fetch(`${API_HOST}/api/blog`, {
    cache: "no-store", //SSR:リクエストごとにサーバーに対してAPIを叩いてもらう。更新頻度が高いため。 SSGの場合はforce-cache
  });

  const data = await res.json();
  return data.posts;
};

const Home: React.FC = () => {
  const [isLoggedIn,setIsLoggedIn] =useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllBlogs();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <MainHeader>
        {!isLoggedIn ? <SignInButton/>:<PostButton />}
      </MainHeader>
      <MainContainer>
        <ContentBlock>
          {posts.map((post: PostType) => (
            <BlogContent key={post.id} post={post} />
          ))}
        </ContentBlock>
      </MainContainer>
    </React.Fragment>
  );
};

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: center;
`;
const ContentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-direction: column-reverse;
  align-items: center;
`;

export default Home;
