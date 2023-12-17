"use client";

import { useRouter } from "next/navigation";

const Gate = () => {
  const router = useRouter();

  router.push("/home");
  router.refresh();

  return(
    null
  );
};

export default Gate;
