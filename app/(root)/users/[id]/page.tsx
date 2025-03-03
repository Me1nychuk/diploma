import { UserArticle } from "@/shared/components/shared";
import { fetchUserByIdOrEmail } from "@/shared/services";
import { notFound } from "next/navigation";
import React from "react";

const UserPage = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await fetchUserByIdOrEmail(id);
  if (data.statusCode !== 200) return notFound();
  return (
    <>
      <UserArticle user={data.data} />
    </>
  );
};

export default UserPage;
