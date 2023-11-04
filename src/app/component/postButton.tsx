"use client";

import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const PostButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PostButtonContainer>
      <ToggleButton onClick={toggleMenu}>投稿する</ToggleButton>
      <Menu isOpen={isOpen}>
        <PostBlogButton href="/pages/blog/add">Blog</PostBlogButton>
        <PostBlogButton href="/pages/tweet/add">Tweet</PostBlogButton>
        <PostBlogButton href="/pages/Album/add">Album</PostBlogButton>
        <PostBlogButton href="/pages/Album/add">Movie</PostBlogButton>
      </Menu>
    </PostButtonContainer>
  );
};

const PostButtonContainer = styled.div`
  display: flex;
  width: 150px;
  position: relative; // 相対位置
  border-radius: 5px;
  display: inline-block; // インラインブロック要素
  background-color: #df00a3;
  cursor: pointer; // カーソルをポインターに変更
`;

const ToggleButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

const Menu = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: ${(props) => (props.isOpen ? "contents-fit" : "0")};
  position: absolute;
  left: 0;
  background-color: #fff;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  transition: 0.3s ease-in-out;
`;

const PostBlogButton = styled.a`
  text-align: center;
  border-radius: 4px;
  padding: 8px;
  margin: 5px;
  background-color: #f6eff0; /* Change to your desired background color */
  font-weight: 600;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: #ffacd7; /* Change to your desired hover background color */
  }
`;

export default PostButton;
