import React from "react";
import type { Metadata } from "next";
import { ChatContent } from "@/shared/components/shared";

export const metadata: Metadata = {
  title: "NUWM | Live chat",
  description: "Live chat, with other users",
};

const ChatPage: React.FC = () => {
  return (
    <>
      <ChatContent />
    </>
  );
};

export default ChatPage;
