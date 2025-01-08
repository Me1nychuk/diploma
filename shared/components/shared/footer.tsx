import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn("w-full text-xs px-5  max-sm:text-[10px]", className)}>
      <div className="flex justify-between mb-4 ">
        <Link
          href="/contacts"
          className="block underline hover:opacity-100 opacity-65 font-medium transition-all duration-100  "
        >
          Контакти
        </Link>
        <Link
          href="/feedback"
          className="block underline hover:opacity-100  opacity-65 font-medium transition-all duration-100 "
        >
          Зворотній зв’язок
        </Link>
      </div>

      <Link
        href="/policy"
        className="block  hover:opacity-100  opacity-65 font-medium transition-all duration-100  text-center"
      >
        © {new Date().getFullYear()} NUWM - Computer Engineering department. Усі
        права захищено.
      </Link>
    </div>
  );
};

export { Footer };
