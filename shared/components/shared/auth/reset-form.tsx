"use client";
import React from "react";
import { Button, Input } from "../../ui";
import { Loader2 } from "lucide-react";
import { resetPassword } from "@/shared/services";
import Link from "next/link";
import { useAppSelector } from "@/shared/store/store";
import { useRouter } from "next/navigation";

interface ResetFormProps {
  className?: string;
  token: string;
}

const ResetForm: React.FC<ResetFormProps> = ({ token }) => {
  const { currentUser } = useAppSelector((state) => state.user);
  const router = useRouter();
  if (currentUser) {
    router.replace("/");
  }
  const [passwords, setPasswords] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [requestSent, setRequestSent] = React.useState<
    "" | "success" | "error"
  >("");

  const handleResetPassword = async () => {
    setIsLoading(true);
    const response = await resetPassword(passwords.password, token);
    if (response.statusCode === 201) {
      setRequestSent("success");
      setPasswords({ password: "", confirmPassword: "" });
    } else {
      setRequestSent("error");
    }
    setIsLoading(false);
  };
  return (
    <>
      <h1 className="font-bold text-4xl max-sm:text-3xl text-center mb-5 ">
        Скидання паролю
      </h1>
      <p className="text-left text-base max-sm:text-xs mb-5">
        <span className="font-bold">*</span>Введіть новий пароль і
        підтвердження, мінімум 8 символів. Після чого натисніть кнопку
        &quot;Зберегти&quot;.
      </p>

      <Input
        className="mb-5"
        placeholder="Новий пароль"
        value={passwords.password}
        type="password"
        onChange={(e) =>
          setPasswords({ ...passwords, password: e.target.value })
        }
      />
      <Input
        placeholder="Підтвердження пароль"
        value={passwords.confirmPassword}
        type="password"
        onChange={(e) =>
          setPasswords({ ...passwords, confirmPassword: e.target.value })
        }
      />

      <Button
        disabled={
          isLoading ||
          !passwords.password ||
          !passwords.confirmPassword ||
          passwords.password !== passwords.confirmPassword
        }
        onClick={handleResetPassword}
        className="w-full my-5 rounded-xl bg-text text-background hover:opacity-80 active:translate-y-1 transition-all duration-200 duration-100"
      >
        Зберегти
      </Button>

      {isLoading && <Loader2 className="animate-spin mx-auto my-5" size={40} />}

      {!isLoading && requestSent === "success" && (
        <>
          <p className="font-extrabold text-center ">
            Пароль успішно змінено. ✅
          </p>
          <Link
            href="/login"
            className="block text-center mt-2 underline hover:opacity-50 transition-all duration-100"
          >
            Ввійти
          </Link>
        </>
      )}
      {!isLoading && requestSent === "error" && (
        <p className="font-extrabold text-center ">
          Щось пішло не так, попробуйте ще раз. ❌
        </p>
      )}
    </>
  );
};

export { ResetForm };
