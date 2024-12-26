"use client";
import React, { Suspense } from "react";
// import type { Metadata } from "next";
import { Loader2 } from "lucide-react";
import { Button, Input } from "@/shared/components/ui";
import { forgotPassword } from "@/shared/services";

// export const metadata: Metadata = {
//   title: "NUWM | Reset password",
//   description: "Reset password",
// };

const VerifyPage = () => {
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
    } else {
      setRequestSent("error");
    }

    setIsLoading(false);
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    <>
      <div className=" w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
        <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
          <h1 className="font-bold text-4xl max-sm:text-3xl text-center mb-5 ">
            Забули пароль?
          </h1>
          <p className="text-left text-base max-sm:text-xs mb-5">
            <span className="font-bold">*</span>Якщо ви забули свій пароль, ви
            можете скинути його за допомогою форми нижче. Вам на пошту буде
            надіслано лист з унікальним посиланням для скидання паролю.
            Перейдіть за посиланням, щоб скинути пароль.
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

          {isLoading && (
            <Loader2 className="animate-spin mx-auto my-5" size={40} />
          )}

          {!isLoading && requestSent === "success" && (
            <p className="text-center text-green-500">
              Посилання для скидання паролю було надіслано на вашу електронну
              адресу.
            </p>
          )}
          {!isLoading && requestSent === "error" && (
            <p className="text-center text-red-500">
              Щось пішло не так, переконайтесь чи ваша електронна адреса
              правильна або спробуєте ще раз пізніше.
            </p>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default VerifyPage;
