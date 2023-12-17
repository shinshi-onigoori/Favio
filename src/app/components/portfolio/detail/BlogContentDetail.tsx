import { PostType } from "@/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import toast from "react-hot-toast";

type PostContentprops = {
  post: PostType;
};

const getSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

const BlogContentDetail = ({ post }: PostContentprops) => {
  const [session, setSession] = useState<Session | null>();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();
        setSession(session);
      } catch (error) {
        toast.error("エラーが発生しました", { id: "1" });
      }
    };

    fetchSession();
  }, []);

  return (
    <div
      key={post.id}
      className="w-[90%]  h-fit p-[20px] bg-white rounded-[10px]"
    >
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
          <p className=" inline-block text-[1rem] pl-[1rem] ">
            shinshi-onigoori
          </p>
        </div>
        <p className=" inline-block text-[1rem] font-[600] items-center text-[#506068]">
          {new Date(post.date).toDateString()}
        </p>
        {session && session.user?.email ? (
          <>
            <Link
              href={`/blog/edit/${post.id}`}
              className="w-[30px] h-[30px] flex justify-center items-center text-[1.2rem] bg-white rounded-[100%] font-[600] font-[#3f2739] hover:bg-[#dbdbdb]"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="text-[2rem] py-[20px] font-[600]">
        <h2>{post.title}</h2>
      </div>
      <p>{post.description}</p>
      <div></div>
    </div>
  );
};

export default BlogContentDetail;
