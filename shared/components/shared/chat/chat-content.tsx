"use client";
import React, { useEffect, useState } from "react";
import { socket } from "./socket";
import { useAppSelector } from "@/shared/store/store";
import Link from "next/link";
import { Button, Input } from "../../ui";
import toast from "react-hot-toast";

const ChatContent: React.FC = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const [onlineUsers, setOnlineUsers] = useState<number>(1);
  const [messages, setMessages] = useState<
    { user: string; text: string; id: string }[]
  >([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (currentUser) {
      const sessionId =
        localStorage.getItem("sessionId") || generateSessionId();

      if (!localStorage.getItem("sessionId")) {
        localStorage.setItem("sessionId", sessionId);
      }
      socket.connect();

      socket.emit("join_chat", {
        username: currentUser?.fullname || "Anonymous",
        sessionId,
      });

      socket.on("receive_message", (msg) => {
        setMessages((prev) => [...prev, msg]);
      });
      socket.on("users_online", (msg) => {
        setOnlineUsers(msg);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [currentUser]);

  if (!currentUser) {
    return (
      <>
        <h1 className="text-3xl text-center">Чат</h1>
        <p className="text-center">
          Нажаль цей функціонал доступний тільки для авторизованих користувачів
        </p>
        <Link
          href="/login"
          className="text-center block underline hover:opacity-100 opacity-65 font-medium transition-all duration-100 "
        >
          Увійти
        </Link>
      </>
    );
  }

  const generateSessionId = (): string => {
    return "session_" + Math.random().toString(36).substring(2, 15);
  };
  const sendMessage = async () => {
    if (message.trim()) {
      if (message.trim().length > 150) {
        toast.error("Повідомлення повинно бути не більше 150 символів");
        return;
      }
      socket.emit("send_message", {
        user: currentUser?.fullname || "Anonymous",
        text: message,
      });
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl ">Чат</h1>
      <h2>
        Вітаємо, {currentUser?.fullname || "Anonymous"}, це живий чат, який не
        зберігає історію повідомлень
      </h2>
      <h2 className="text-sm text-center">
        Кількість онлайн користувачів: {onlineUsers}
      </h2>
      <ul className="max-h-[400px] h-[400px] min-h-[300px] overflow-y-auto p-3 flex flex-col gap-2 border-[1px] border-text rounded-2xl">
        {messages.length === 0 && (
          <p className="text-center">Поки немає повідомлень</p>
        )}
        {messages.map((msg) => (
          <li
            key={msg.id}
            className="text-sm glass border-[1px] border-text rounded-xl p-2"
          >
            <strong>{msg.user}:</strong> {msg.text}
          </li>
        ))}
      </ul>
      <div>
        <Input
          type="text"
          placeholder="Введіть повідомлення..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          className="rounded-2xl mt-5 w-full"
          onClick={sendMessage}
          disabled={message.trim().length === 0}
        >
          Відправити
        </Button>
      </div>
    </div>
  );
};

export { ChatContent };
