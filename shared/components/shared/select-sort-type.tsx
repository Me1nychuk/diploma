"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/shared/lib/utils";

interface SelectSortTypeProps {
  className?: string;
  values: Record<string, string>;
  selected: string;
  onChange: (value: string) => void;
  label?: string;
}
export const SelectSortType = ({
  className,
  values,
  selected,
  onChange,
  label,
}: SelectSortTypeProps) => {
  return (
    <>
      <div>
        <Select onValueChange={onChange} defaultValue={selected}>
          <SelectTrigger
            className={cn(
              "w-[180px] h-12 py-2  rounded-xl border-gray-200/5 glass-2 ",
              className
            )}
          >
            <SelectValue placeholder={`Сортування: ${values[selected]}`} />
          </SelectTrigger>
          <SelectContent className="w-[180px] rounded-xl border-gray-200/5 glass-2 p-0">
            <SelectGroup className="p-0">
              <SelectLabel className="text-xs text-nowrap pl-2">
                Оберіть {label}
              </SelectLabel>
              {Object.entries(values).map(([key, value]) => (
                <SelectItem
                  key={key}
                  value={key}
                  className="hover:cursor-pointer"
                >
                  {value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
