"use client";

import { cn } from "@/shared/lib/utils";
import { useAppSelector } from "@/shared/store/store";
import { Role } from "@/types";
import { Newspaper, Speech, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { NewsPanel } from "./news-panel";
import { DiscussionPanel } from "./discussion-panel";

const AdminContent: React.FC = ({}) => {
  const { currentUser } = useAppSelector((state) => state.user);
  const router = useRouter();
  const [chapter, setChapter] = React.useState<"users" | "news" | "discussins">(
    "users"
  );
  useEffect(() => {
    if (currentUser?.role !== Role.ADMIN) {
      router.replace("/");
    }
  }, [currentUser, router]);
  return (
    <>
      <div className="flex gap-2 items-center max-sm:flex-col max-sm:items-start">
        <h1 className="text-xl max-sm:text-base font-bold">
          Панель адміністратора
        </h1>
        <p className="max-sm:hidden"> - </p>
        <p>Адміністратор: {currentUser?.fullname}</p>
      </div>
      <div>
        <ul className="admin-nav">
          <li
            className={cn({ active: chapter === "users" })}
            onClick={() => {
              setChapter("users");
            }}
          >
            <User size={20} />
            <span>Користувачі</span>
          </li>
          <li
            className={cn({ active: chapter === "news" })}
            onClick={() => {
              setChapter("news");
            }}
          >
            <Newspaper size={20} />
            <span>Новини</span>
          </li>
          <li
            className={cn({ active: chapter === "discussins" })}
            onClick={() => {
              setChapter("discussins");
            }}
          >
            <Speech size={20} />
            <span>Дискусії</span>
          </li>
        </ul>
        {chapter === "users" && <div>users</div>}
        {chapter === "news" && <NewsPanel />}
        {chapter === "discussins" && <DiscussionPanel />}
      </div>
    </>
  );
};

export { AdminContent };
