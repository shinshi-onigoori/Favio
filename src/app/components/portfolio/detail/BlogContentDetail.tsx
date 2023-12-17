import { PostType } from "@/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

type PostContentprops = {
  post: PostType;
};

const BlogContentDetail: React.FC<PostContentprops> = ({ post }) => {

// const session = await getServerSession(authOptions);

  return (
    <div key={post.id} className="w-[90%]  h-fit p-[20px] bg-white rounded-[10px]">
      <div className="w-full flex justify-between ">
        <div className="w-7/10 flex items-center">
          <div className="w-[40px] h-[40px]">
            <Image
              src="/favicon.ico"
              alt="icon"
              width={40} // 画像の幅を指定
              height={40} // 画像の高さを指定
            />
          </div>
          <p className=" inline-block text-[1rem] pl-[1rem] ">shinshi-onigoori</p>
        </div>
        <p className=" flex-inline-block text-[1rem] font-[600] items-center text-[#506068]">{new Date(post.date).toDateString()}</p>
        <EditLink href={`/blog/edit/${post.id}`}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </EditLink>
      </div>
      <BlogContentTitle>
        <PostTitle>{post.title}</PostTitle>
      </BlogContentTitle>
      <Description>{post.description}</Description>
      <BlogContentFooter></BlogContentFooter>
    </div>
  );
};

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
