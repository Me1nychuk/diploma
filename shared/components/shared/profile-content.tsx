"use client";
import { cn } from "@/shared/lib/utils";
import { fetchUserByIdOrEmail } from "@/shared/services";
import { useAppSelector } from "@/shared/store/store";
import { User } from "@/types";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProfileContentProps {
  className?: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ className }) => {
  const { currentUser } = useAppSelector((state) => state.user);
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

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
        </div>
      </div>

      <table className="table-discussion">
        <caption>Список ваших обговорень</caption>
        <thead>
          <tr>
            <th>Тема</th>
            <th>Кількість відповідей</th>
            <th>Дата публікації</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Тема обговорення 1</td>
            <td>10 відповідей</td>
            <td>2022-01-01</td>
          </tr>

          <tr>
            <td>Тема обговорення 1</td>
            <td>10 відповідей</td>
            <td>2022-01-01</td>
          </tr>

          <tr>
            <td>Тема обговорення 1</td>
            <td>10 відповідей</td>
            <td>2022-01-01</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileContent;
