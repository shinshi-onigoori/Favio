"use server";

import prisma from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

export const signUp = async (email: string, password: string, username: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return "すでにそのemailは存在しています";
  }

  const passwordHash= bcrypt.hashSync(password, 10);

  await prisma.user.create({
    data: {
      email,
      passwordHash,
      username,
    },
  });

  return "アカウントの制作に成功しました。"
};
