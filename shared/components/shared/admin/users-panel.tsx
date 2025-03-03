import { cn } from "@/shared/lib/utils";
import { CircleHelp } from "lucide-react";
import Link from "next/link";
import React from "react";

interface UsersPanelProps {
  className?: string;
}

const UsersPanel: React.FC<UsersPanelProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col justify-center", className)}>
      <ul className="admin-panel-list ">
        <li>
          <Link href="/users">Переглянути користувачів</Link>
        </li>
        <li>
          <Link href="/profile">Переглянути власний профіль</Link>
        </li>
      </ul>
      <div className="mt-5 relative pl-7 text-sm mx-auto text-center">
        <CircleHelp size={16} className="absolute top-0 left-0" />
        <p className="mb-3">
          Переглянути користувачів - переглянути всі користувачі, які були
          створені, а також їх налаштування
        </p>
        <p>Переглянути власний профіль - переглянути власний профіль</p>
      </div>
    </div>
  );
};

export { UsersPanel };
