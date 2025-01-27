"use client";
import { Search } from "lucide-react";
import React from "react";
import { Input } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import { useDebounce } from "react-use";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  className,
  value,
  onChange,
}) => {
  const [content, setContent] = React.useState<string>(value);
  useDebounce(
    () => {
      onChange(content);
    },
    500,
    [content]
  );
  return (
    <div
      className={cn(
        "flex items-center gap-2 glass-2 text-background px-3 py-1 rounded-xl",
        className
      )}
    >
      <Search className="text-text" />
      <Input
        placeholder="Пошук"
        className="max-w-full p-0 border-none text-text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
};

export { SearchInput };
