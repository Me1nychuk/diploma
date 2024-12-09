"use client";
import React from "react";
import { verify } from "@/shared/services";
import toast from "react-hot-toast";
import { Button } from "../../ui";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";

interface VerificationProps {
  className?: string;
  token: string;
}
export const VerificationForm = ({ className, token }: VerificationProps) => {
  const [isVerified, setIsVerified] = React.useState<
    "очікування" | "верифіковано" | "не верифіковано" | undefined
  >(undefined);
  const verifyUser = async (token: string) => {
    setIsVerified("очікування");
    const res = await verify(token);
    if (res.statusCode === 200) {
      toast.success("Пошта була успішно верифікована!", {
        duration: 3000,
      });
      setIsVerified("верифіковано");
    } else {
      toast.error("Помилка при верифікації пошти! \n Причина: " + res.error, {
        duration: 4000,
      });
      setIsVerified("не верифіковано");
    }
  };

  return (
    <div className={" flex flex-col gap-2  items-center " + className}>
      <h1 className="text-3xl font-bold">Верифікація пошти</h1>
      <p>Для верифікації пошти натисніть кнопку нижче</p>
      <Button
        className=" hover:opacity-80 active:opacity-80 transition-all duration-200 active:translate-y-1 rounded-xl"
        onClick={() => verifyUser(token)}
        disabled={isVerified === "верифіковано"}
      >
        Верифікувати пошту
      </Button>

      {isVerified && (
        <p
          className={cn("block px-2  rounded-xl", {
            "bg-green-600": isVerified === "верифіковано",
            "bg-red-600": isVerified === "не верифіковано",
            "bg-blue-400": isVerified === "очікування",
          })}
        >
          Статус: {isVerified}
        </p>
      )}

      {isVerified === "не верифіковано" && (
        <p className="opacity-50 text-[10px]">
          *Ця пошта не була верифікована бо користувача з таким токеном не було
          знайдено, або він не існує.
        </p>
      )}

      {isVerified === "верифіковано" && (
        <>
          <p className="opacity-50 text-[10px]">
            *Ця пошта була верифікована, тепер ви можете зайти в свій аккаунт.
          </p>

          <Link
            href="/login"
            className=" text-[10px] opacity-50 hover:text-black active:text-black transition-all duration-200 active:translate-y-1 underline"
          >
            Увійти в профіль
          </Link>
        </>
      )}
    </div>
  );
};
