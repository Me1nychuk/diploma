"use client";
import { forgotPassword } from "@/shared/services";
import React from "react";
import { Button, Input } from "../../ui";
import { Loader2 } from "lucide-react";
import { useAppSelector } from "@/shared/store/store";
import { useRouter } from "next/navigation";

const ResetContent: React.FC = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const router = useRouter();
  if (currentUser) {
    router.replace("/");
  }
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [requestSent, setRequestSent] = React.useState<
    "" | "success" | "error"
  >("");

  const handleResetPassword = async () => {
    setIsLoading(true);
    const response = await forgotPassword(email);

    if (response.statusCode === 201) {
      setRequestSent("success");
      setEmail("");
    } else {
      setRequestSent("error");
    }

    setIsLoading(false);
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    <>
      <h1 className="font-bold text-4xl max-sm:text-3xl text-center mb-5 ">
        Забули пароль?
      </h1>
      <p className="text-left text-base max-sm:text-xs mb-5">
        <span className="font-bold">*</span>Якщо ви забули свій пароль, ви
        можете скинути його за допомогою форми нижче. Вам на пошту буде
        надіслано лист з унікальним посиланням для скидання паролю. Перейдіть за
        посиланням, щоб скинути пароль.
      </p>
      <Input
        placeholder="Введіть свою електронну адресу"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        disabled={isLoading || !emailRegex.test(email)}
        onClick={handleResetPassword}
        className="w-full my-5 rounded-xl bg-text text-background hover:opacity-80 active:translate-y-1 transition-all duration-200 duration-100"
      >
        Відправити
      </Button>

      {isLoading && <Loader2 className="animate-spin mx-auto my-5" size={40} />}

      {!isLoading && requestSent === "success" && (
        <p className="font-extrabold text-center ">
          Посилання для скидання паролю було надіслано на вашу електронну
          адресу. ✅
        </p>
      )}
      {!isLoading && requestSent === "error" && (
        <p className="font-extrabold text-center ">
          Щось пішло не так, переконайтесь чи ваша електронна адреса правильна
          або спробуєте ще раз пізніше. ❌
        </p>
      )}
    </>
  );
};

export { ResetContent };
