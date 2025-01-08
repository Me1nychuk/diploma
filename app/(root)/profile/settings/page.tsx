import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Loader2 } from "lucide-react";
import { UserForm } from "@/shared/components/shared";

export const metadata: Metadata = {
  title: "NUWM | Settings",
  description: "Оновлення профілю",
};

const ProfileSettingsPage: React.FC = () => {
  return (
    <>
      <div className=" w-full max-w-[700px] p-5 rounded-xl  h-full mx-auto">
        <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
          <UserForm />
        </Suspense>
      </div>
    </>
  );
};

export default ProfileSettingsPage;
