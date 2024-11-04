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

interface SelectSortTypeProps {
  className?: string;
}
export const SelectSortType = ({ className }: SelectSortTypeProps) => {
  const [sort, setSort] = React.useState<"Date-" | "Date+">("Date+");
  const onValueChange = (value: "Date-" | "Date+") => {
    setSort(value);
  };
  return (
    <>
      <div className={className}>
        <Select onValueChange={onValueChange} defaultValue={sort}>
          <SelectTrigger className="w-[180px] h-12 py-2 border-none rounded-xl bg-tertiary text-background">
            <SelectValue
              placeholder={`Сортування: ${
                sort == "Date-" ? "Старіші" : "Новіші"
              }`}
            />
          </SelectTrigger>
          <SelectContent className="w-[180px] rounded-xl border-none bg-tertiary text-background p-0">
            <SelectGroup className="p-0">
              <SelectLabel className="text-xs text-nowrap pl-2">
                Оберіть тип сортування
              </SelectLabel>
              <SelectItem value="Date+">Спочатку новіші</SelectItem>
              <SelectItem value="Date-">Спочатку старіші</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
