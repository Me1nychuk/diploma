import React from "react";
import type { Metadata } from "next";
import ProfileContent from "@/shared/components/shared/profile-content";

export const metadata: Metadata = {
  title: "NUWM | Profile",
  description: "Profile information",
};

const ProfilePage: React.FC = () => {
  return (
    <>
     <ProfileContent/>
    </>
  );
};

export default ProfilePage;
