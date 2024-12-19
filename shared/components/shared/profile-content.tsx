"use client";
import { cn } from "@/shared/lib/utils";
import { fetchUserByIdOrEmail } from "@/shared/services";
import { useAppDispatch, useAppSelector } from "@/shared/store/store";
import { User } from "@/types";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { apiLogoutUser } from "@/shared/store/user/operations";
import { DiscussionTable } from "./discussion-table";

interface ProfileContentProps {
  className?: string;
}

const discussions = [
  {
    id: "1",
    title:
      "Тема обговорення 1 loremsdsdsdasd afsd g g sdgf s asf afasfdasfasf asfa fg",
    content: "Це перше обговорення.",

    opinions: [
      {
        id: "o1",
        content: "Це моя думка про перше обговорення.",
        authorId: "a1",
        createdAt: "2023-01-01",
      },
      {
        id: "o2",
        content: "Інша думка про перше обговорення.",
        authorId: "a1",
        createdAt: "2023-01-02",
      },
    ],
    isApproved: true,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-03",
  },
  {
    id: "2",
    title: "Тема обговорення 2",
    content: "Це друге обговорення.",

    opinions: [
      {
        id: "o3",
        content: "Це моя думка про друге обговорення.",
        authorId: "a1",
        createdAt: "2023-02-01",
      },
    ],
    isApproved: false,
    createdAt: "2023-02-01",
    updatedAt: "2023-02-03",
  },
  {
    id: "3",
    title: "Тема обговорення 3",
    content: "Це третє обговорення.",

    opinions: [
      {
        id: "o4",
        content: "Це моя думка про третє обговорення.",
        authorId: "a1",
        createdAt: "2023-03-01",
      },
      {
        id: "o5",
        content: "Інша думка про третє обговорення.",
        authorId: "a1",
        createdAt: "2023-03-02",
      },
    ],
    isApproved: true,
    createdAt: "2023-03-01",
    updatedAt: "2023-03-03",
  },
];

const ProfileContent: React.FC<ProfileContentProps> = ({ className }) => {
  const { currentUser, isLoading } = useAppSelector((state) => state.user);
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const dispatch = useAppDispatch();

  const fetchUserData = async () => {
    try {
      if (currentUser) {
        const data = await fetchUserByIdOrEmail(currentUser.id);
        setUser(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch user data", error);
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    dispatch(apiLogoutUser());
  };

  React.useEffect(() => {
    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  if (!currentUser) {
    return (
      <h2 className="text-text text-2xl text-center">
        Ви не увійшли у профіль
      </h2>
    );
  }

  if (loading) {
    return (
      <h2 className="text-text text-2xl text-center">
        <Loader2 className="animate-spin mx-auto my-5" size={40} />
      </h2>
    );
  }

  return (
    <>
      {isLoading && <Loader2 className="animate-spin mx-auto my-5" size={40} />}
      {!isLoading && (
        <div className={cn("flex flex-col gap-4", className)}>
          <div className="flex gap-3 max-xs:flex-col">
            <Image
              src="/lion/18.png"
              alt={user?.fullname || "User avatar"}
              width="400"
              height="400"
              className="w-full min-xs:w-32 min-md:w-[400px]  shadow-2xl border-text border-[1px]  rounded-xl floating-3"
            />
            <div>
              <h1 className="text-2xl mb-2">{user?.fullname}</h1>
              <p className="max-xs:text-xs">Пошта: {user?.email}</p>
              <p className="max-xs:text-xs">
                Статус:
                {user?.role === "ADMIN"
                  ? " адміністратор"
                  : user?.role === "USER"
                  ? " користувач"
                  : " викладач"}
              </p>
              <p className="max-xs:text-xs">
                Телефон: {user?.phone || "невказано"}
              </p>
              <p className="max-xs:text-xs">Біо: {user?.bio || "невказано"}</p>
            </div>
          </div>

          <DiscussionTable discussions={discussions} />

          <div className="flex justify-between max-sm:flex-col max-sm:gap-5 items-center">
            <Link
              className="w-60 max-sm:w-full  px-2 py-2 text-center text bg-text text-background rounded-xl cursor-pointer shadow-md active:translate-y-[2px] hover:opacity-70 transition-all duration-200 hover:scale-105"
              href={"/profile/settings/"}
            >
              Налаштувати профіль
            </Link>

            <div className="max-sm:w-full">
              <Button
                onClick={handleLogout}
                className="max-sm:w-full max-sm:mb-5 bg-black text-white mr-3 rounded-xl shadow-md active:translate-y-[2px] hover:opacity-70 transition-all duration-200 hover:scale-105"
              >
                Вийти
              </Button>
              <Button className="max-sm:w-full bg-red-700 text-white rounded-xl shadow-md active:translate-y-[2px] hover:opacity-70 transition-all duration-200 hover:scale-105">
                Видалити акаунт
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileContent;
