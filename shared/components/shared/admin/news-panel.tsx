import { cn } from "@/shared/lib/utils";
import { CircleHelp } from "lucide-react";
import Link from "next/link";
import React from "react";

interface NewsPanelProps {
  className?: string;
}

const NewsPanel: React.FC<NewsPanelProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col justify-center", className)}>
      <ul className="admin-panel-list ">
        <li>
          <Link href="/news">Переглянути новини</Link>
        </li>
        <li>
          <Link href="/news/create">Додати новину</Link>
        </li>
      </ul>
      <div className="mt-5 relative pl-7 text-sm mx-auto text-center">
        <CircleHelp size={16} className="absolute top-0 left-0" />
        <p className="mb-3">
          Переглянути новини - переглянути всі новини, які були створені, а
          також їх налаштування
        </p>
        <p>Додати новину - додати новину в систему</p>
      </div>
    </div>
  );
};

export { NewsPanel };
