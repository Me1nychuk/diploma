import React, { Suspense } from "react";
import type { Metadata } from "next";
import ProfileContent from "@/shared/components/shared/profile-content";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "NUWM | Profile",
  description: "Profile information",
};

const ProfilePage: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
        <ProfileContent />
      </Suspense>
    </>
  );
};

export default ProfilePage;
