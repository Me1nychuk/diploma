import { cn } from "@/shared/lib/utils";
import { CircleHelp } from "lucide-react";
import Link from "next/link";
import React from "react";

interface DiscussionPanelProps {
  className?: string;
}

const DiscussionPanel: React.FC<DiscussionPanelProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col justify-center", className)}>
      <ul className="admin-panel-list">
        <li>
          <Link href="/discussions">Переглянути обговорення</Link>
        </li>
        <li>
          <Link href="/discussions/check">
            Переглянути обговорення для перевірки
          </Link>
        </li>
      </ul>
      <div className="mt-5 relative pl-7 text-sm mx-auto text-center">
        <CircleHelp size={16} className="absolute top-0 left-0" />
        <p className="mb-3">
          Переглянути обговорення - переглянути всі обговорення, які були
          створені, а також їх налаштування
        </p>
        <p>
          Переглянути обговорення для перевірки - переглянути всі обговорення
          які очікують перевірки для подальшої публікації
        </p>
      </div>
    </div>
  );
};

export { DiscussionPanel };
