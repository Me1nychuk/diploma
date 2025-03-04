"use client";
import { cn } from "@/shared/lib/utils";
import { Role, User } from "@/types";
import React from "react";
import { DiscussionTable } from "../discussions";
import { Button } from "../../ui";
import { changeUserRole } from "@/shared/lib/changeUserRole";
import { blockUserById } from "@/shared/lib/blockUserById";
import { deleteUserById } from "@/shared/lib/deleteUserById";
import { PopupConfirm } from "../popup-confirm";

interface UserArticleProps {
  className?: string;
  user: User;
}

const UserArticle: React.FC<UserArticleProps> = ({ className, user }) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h1 className="text-3xl font-bold">{user.fullname}</h1>
      <p>Пошта: {user.email || "Немає пошти"}</p>
      <p>Біо: {user.bio || "Немає біографіі"}</p>
      <p>Телефон: {user.phone}</p>
      <p>Роль: {user.role}</p>
      <p>Заблокований: {user.isBlocked ? "Так" : "Ні"}</p>
      <p>Верифікований: {user.isVerified ? "Так" : "Ні"}</p>
      <p>Дата створення: {new Date(user.createdAt).toLocaleDateString()}</p>
      <p>
        Дата останнє оновлення: {new Date(user.updatedAt).toLocaleDateString()}
      </p>

      <DiscussionTable discussions={user.discussions} />
      <PopupConfirm onClick={() => deleteUserById(user.id)}>
        <Button className="rounded-2xl hover:opacity-70 bg-red-600 text-white ">
          Видалити користувача
        </Button>
      </PopupConfirm>
      <PopupConfirm onClick={() => blockUserById(user.id, !user.isBlocked)}>
        <Button className="rounded-2xl hover:opacity-70 bg-black text-white">
          {user.isBlocked ? "Розблокувати" : "Заблокувати"} користувача
        </Button>
      </PopupConfirm>
      {user.role !== Role.TEACHER && (
        <PopupConfirm onClick={() => changeUserRole(user.id, Role.TEACHER)}>
          <Button className="rounded-2xl hover:opacity-70 ">
            Дати роль: Викладача
          </Button>
        </PopupConfirm>
      )}
      {user.role !== Role.ADMIN && (
        <PopupConfirm onClick={() => changeUserRole(user.id, Role.ADMIN)}>
          <Button className="rounded-2xl hover:opacity-70 ">
            Дати роль: Адміністратора
          </Button>
        </PopupConfirm>
      )}
      {user.role !== Role.USER && (
        <PopupConfirm onClick={() => changeUserRole(user.id, Role.USER)}>
          <Button className="rounded-2xl hover:opacity-70 ">
            Дати роль: Користувача
          </Button>
        </PopupConfirm>
      )}
    </div>
  );
};

export { UserArticle };
