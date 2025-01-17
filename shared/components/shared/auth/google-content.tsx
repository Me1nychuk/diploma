<<<<<<< HEAD
"use client";
import { useAppDispatch, useAppSelector } from "@/shared/store/store";
import { apiLoginWithGoogle } from "@/shared/store/user/operations";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
=======
>>>>>>> 9f009d7 (Added Composition)
import React from "react";

interface GoogleContentProps {
  className?: string;
  token: string;
}

const GoogleContent: React.FC<GoogleContentProps> = ({ className, token }) => {
<<<<<<< HEAD
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading, currentUser } = useAppSelector((state) => state.user);
  const handleLogin = React.useCallback(async () => {
    try {
      await dispatch(apiLoginWithGoogle({ token }));
    } catch (error) {
      console.error("Помилка при логіні через Google:", error);
    }
  }, [dispatch, token]);

  React.useEffect(() => {
    if (currentUser) {
      router.replace("/");
    } else if (!isLoading) {
      handleLogin();
    }
  }, [currentUser, router, isLoading]);

  return (
    <div className={className}>
      <h1 className="text-3xl font-bold text-center">
        Спроба входу через Google
      </h1>
      {isLoading && <Loader2 className="animate-spin mx-auto my-5" size={40} />}
=======
  return (
    <div className={className}>
      <p>GoogleContent</p>
      {token}
>>>>>>> 9f009d7 (Added Composition)
    </div>
  );
};

export { GoogleContent };
