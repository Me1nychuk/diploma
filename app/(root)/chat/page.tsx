import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | Live chat",
  description: ", ..",
};

const ChatPage: React.FC = () => {
  return (
    <>
      <div className="bg-background  grid  place-items-center">
        <p className="mt-50 text-4xl">ChatPage page</p>
      </div>
    </>
  );
};

export default ChatPage;
