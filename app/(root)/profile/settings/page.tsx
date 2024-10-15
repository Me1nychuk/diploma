import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | Settings",
  description: ", ..",
};

const ProfileSettingsPage: React.FC = () => {
  return (
    <>
      <div className="bg-background  grid  place-items-center">
        <p className="mt-50 text-4xl">ProfileSettingsPage page</p>
      </div>
    </>
  );
};

export default ProfileSettingsPage;
