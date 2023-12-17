import { PostType } from "@/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

type PostContentprops = {
  post: PostType;
};

const BlogContentDetail: React.FC<PostContentprops> = ({ post }) => {
  return (
    <BlogContentDetailContainer key={post.id}>
      <BlogContenHeader>
        <AccountBlock>
          <IconBlock>
            <Image
              src="/favicon.ico"
              alt="icon"
              width={40} // 画像の幅を指定
              height={40} // 画像の高さを指定
            />
          </IconBlock>
          <AccountNameBlock>shinshi-onigoori</AccountNameBlock>
        </AccountBlock>
        <DateBlock>{new Date(post.date).toDateString()}</DateBlock>
        <EditLink href={`/blog/edit/${post.id}`}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </EditLink>
      </BlogContenHeader>
      <BlogContentTitle>
        <PostTitle>{post.title}</PostTitle>
      </BlogContentTitle>
      <Description>{post.description}</Description>
      <BlogContentFooter></BlogContentFooter>
    </BlogContentDetailContainer>
  );
};

const BlogContentDetailContainer = styled.div`
  width: 90%;
  height: fit-content;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;

const BlogContenHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const AccountBlock = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;

const IconBlock = styled.div`
  width: 40px;
  height: 40px;
`;

const AccountNameBlock = styled.div`
  font-size: 1rem;
  padding-left: 10px;
`;

const BlogContentTitle = styled.div`
  font-size: 2rem;
  padding: 20px 0px;
`;

const PostTitle = styled.h2`
  font-weight: 600;
`;

const DateBlock = styled.blockquote`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #37474f; /* Change to your desired text color */
`;

const EditLink = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: #fff;
  border-radius: 100%;
  font-weight: 600;
  color: #3f2739;
  &:hover {
    background-color: #dbdbdb;
  }
`;

const Description = styled.div``;

const BlogContentFooter = styled.div``;

export default BlogContentDetail;
