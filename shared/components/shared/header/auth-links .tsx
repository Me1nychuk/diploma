import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import React from "react";

interface AuthLinksProps {
  className?: string;
  orientation: boolean;
}

const AuthLinks: React.FC<AuthLinksProps> = ({ className, orientation }) => {
  return (
    <div className={cn("flex ", orientation ? "flex-col" : "gap-2", className)}>
      <Link href="/login" className="text-sm  underline-custom">
        Ввійти
      </Link>
      <Link href="/register" className="text-sm  underline-custom">
        Реєстрація
      </Link>
    </div>
  );
};

export default AuthLinks;
