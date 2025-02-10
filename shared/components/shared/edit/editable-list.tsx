"use client";
import React from "react";
import { Button, Input } from "@/shared/components/ui";
import { Link as LinkIcon, Trash } from "lucide-react";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import isValidUrl from "@/shared/lib/isValidUrl";
import toast from "react-hot-toast";

interface EditableListProps {
  className?: string;
  array?: string[];
  setArray: (array: string[]) => void;
}

const EditableList: React.FC<EditableListProps> = ({
  className,
  array = [],
  setArray,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  console.log(array);
  const handleOnClick = () => {
    if (inputValue.trim() === "") return;
    if (!isValidUrl(inputValue)) {
      toast.error("Некоректне посилання");
      return;
    }
    if (array.includes(inputValue)) {
      toast.error("Такий посилання вже існує");
      return;
    }
    setArray([...array, inputValue]);
    setInputValue("");
  };
  const handleOnDelete = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div className={cn("bg-background mb-5 rounded-xl", className)}>
      <ul className="flex flex-col gap-2 text-sm max-sm:text-[10px]  min-h-28 max-h-40 overflow-y-auto overflow-x-hidden border-b-[1px] border-text border-opacity-45">
        {array.length === 0 && (
          <li className="p-2 max-sm:p-3  text-center">Список порожній</li>
        )}
        {array.map((item, index) => (
          <li
            className=" p-2 max-sm:p-3 border-b-[1px] last:border-0 border-text flex flex-col gap-1"
            key={index}
          >
            <div className="flex justify-between">
              <span className="text-base">{index + 1}.</span>

              <div className="flex gap-2">
                <Link
                  className="cursor-pointer hover:opacity-80"
                  href={item}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon size={20} />
                </Link>
                <Trash
                  className="cursor-pointer hover:opacity-80"
                  onClick={() => handleOnDelete(index)}
                  size={20}
                />
              </div>
            </div>
            <p>{item.length > 50 ? item.slice(0, 50) + "..." : item}</p>
          </li>
        ))}
      </ul>
      <Input
        className="border-none"
        type="text"
        placeholder="Добавте посилання на фото."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        className="w-full rounded-xl disabled:opacity-75 disabled:cursor-not-allowed"
        onClick={handleOnClick}
        disabled={!inputValue}
      >
        Додати
      </Button>
    </div>
  );
};

export { EditableList };
