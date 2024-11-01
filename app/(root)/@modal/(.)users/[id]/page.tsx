"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import { TestModal } from "@/shared/components/shared/testModal";
const Page: React.FC = () => {
  // const router = useRouter();

  return (
    <>
      {/* <div className="bg-black opacity-50  grid  place-items-center text-white h-screen w-screen absolute z-10">
        user id page modal
        <p onClick={() => router.back()}>Home</p>
      </div> */}
      <TestModal />
      <p>User id</p>
    </>
  );
};

export default Page;
