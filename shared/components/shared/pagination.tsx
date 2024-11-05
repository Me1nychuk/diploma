"use client";
import React from "react";
import { Button } from "../ui";

interface PaginationProps {
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
  totalPages: number;
  page: number;
  nextPage: () => void;
  previousPage: () => void;
}
export const Pagination = ({
  hasNextPage,
  hasPrevPage,
  totalPages,
  page,
  nextPage,
  previousPage,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-5">
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
