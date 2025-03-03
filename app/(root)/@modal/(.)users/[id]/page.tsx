import React from "react";
import { Modal, UserArticle } from "@/shared/components/shared";
import { fetchUserByIdOrEmail } from "@/shared/services";
import { notFound } from "next/navigation";
const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await fetchUserByIdOrEmail(id);
  if (data.statusCode !== 200) return notFound();

  return (
    <>
      <Modal>
        <UserArticle user={data.data} />
      </Modal>
    </>
  );
};

export default Page;
