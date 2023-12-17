"use client";

import { PostType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

type PostContentprops = {
  post: PostType;
};

const BlogContent = ({ post }: PostContentprops) => {
  return (
    <BlogContentContainer>
      <Link
        href="/detail/[id]"
        as={`detail/${post.id}`}
        key={post.id}
      >
        <BlogContenHeader>
          <AccountBlock>
            <IconBlock>
              <Image
                src="/favicon.ico"
                alt="icon"
                width={40} //像の幅を指定
                height={40} // 画像の高さを指定
              />
            </IconBlock>
            <AccountNameBlock>shinshi-onigoori</AccountNameBlock>
          </AccountBlock>
          <DateBlock>{new Date(post.date).toDateString()}</DateBlock>
        </BlogContenHeader>
        <BlogContentTitle>
          <PostTitle>{post.title}</PostTitle>
          {/* <Description>{post.description}</Description> */}
        </BlogContentTitle>
        <BlogContentFooter></BlogContentFooter>
      </Link>
    </BlogContentContainer>
  );
};

const BlogContentContainer = styled.div`
  box-sizing: border-box;
  width: 75%;
  height: fit-content;
  padding: 16px;
  margin: 0 6px 10px;
  border-radius: 4px;
  background-color: #f2f2f2;
  &:hover {
    background-color: #e4e4e4;
  }
`;

const BlogContenHeader = styled.div`
  width: 100%;
  display: flex;
`;

const AccountBlock = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;

const IconBlock = styled.div`
  width: 20px;
  height: 20px;
`;

// const IconImage = styled.img`
//   width: 100%;
//   height: 100%;
// `;

const AccountNameBlock = styled.div`
  font-size: 1rem;
  padding-left: 10px;
`;

const BlogContentTitle = styled.div`
  padding-top: 20px;
`;
const BlogContentFooter = styled.div``;

const PostTitle = styled.h2`
  font-weight: 600;
`;

const DateBlock = styled.blockquote`
  font-size: 0.5rem;
  font-weight: 600;
  color: #37474f; /* Change to your desired text color */
`;

export default BlogContent;
