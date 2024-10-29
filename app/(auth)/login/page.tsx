import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Input, LogoIcon } from "@/shared/components/ui";

export const metadata: Metadata = {
  title: "NUWM | Login",
  description: ", ..",
};

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-1 items-center gap-7 ">
        <div className="w-1/2 border border-black">
          <Image
            src="/lion/3.png"
            alt="lion"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <div className=" relative w-1/2 bg-background-transparent  glass px-4 py-3 rounded-xl h-full">
          <h2>Welcome</h2>
          <LogoIcon
            size={50}
            className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2"
          />
          <p className="my-3">try to login</p>
          <Input type="text" className="bg-transparent rounded-[10px]" />
          <p className="my-3">try to login</p>
          <Input type="text" className="bg-transparent rounded-[10px]" />
          <p className="my-3">try to login</p>
          <Input type="text" className="bg-transparent rounded-[10px]" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
