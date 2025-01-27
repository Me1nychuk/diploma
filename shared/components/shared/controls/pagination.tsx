"use client";
import React from "react";
import { Button } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";

interface PaginationProps {
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
  totalPages: number;
  page: number;
  nextPage: () => void;
  previousPage: () => void;
  classname?: string;
}
export const Pagination = ({
  hasNextPage,
  hasPrevPage,
  totalPages,
  page,
  nextPage,
  previousPage,
  classname,
}: PaginationProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-5", classname)}>
      <Button
        disabled={!hasPrevPage}
        className="bg-transparent hover:text-accent transition-all duration-200 active:translate-y-1"
        onClick={() => previousPage()}
      >
        Назад
      </Button>
      <p>
        {page}/{totalPages}
      </p>
      <Button
        className="bg-transparent hover:text-accent transition-all duration-200 active:translate-y-1"
        disabled={!hasNextPage}
        onClick={() => nextPage()}
      >
        Вперед
      </Button>
    </div>
  );
};
