"use client";
import React from "react";
import { Input } from "@/shared/components/ui";

import {
  NewsBlock,
  // Pagination,
  SelectSortType,
} from "@/shared/components/shared";
import { Search } from "lucide-react";

// const array = Array.from({ length: 30 }, (_, index) => ({ id: index + 1 }));

export const NewsPageContent: React.FC = () => {
  // const pagination = {
  //   page: 1,
  //   per_page: 5,
  //   hasNextPage: true,
  //   hasPrevPage: false,
  //   totalPages: 1,
  // };

  return (
    <>
      <div className="">
        <h1 className="font-bold text-4xl max-sm:text-3xl text-center mb-5 ">
          Новини кафедри
        </h1>

        <div>
          <div className="flex max-sm:flex-col gap-5 justify-between mb-5">
            <div className="flex items-center gap-2 bg-tertiary text-background px-3 py-1 rounded-xl">
              <Search />
              <Input
                placeholder="Пошук"
                className="max-w-full p-0 border-none"
              />
            </div>
            {/*    TODO: SelectSortType */}
            <SelectSortType />
          </div>

          <NewsBlock />

          {/* 
          TODO: redo pagination + searchParams
          <Pagination
            hasNextPage={pagination.hasNextPage}
            hasPrevPage={pagination.hasPrevPage}
            totalPages={pagination.totalPages}
            page={pagination.page}
            nextPage={() => {}}
            previousPage={() => {}}
          /> */}
          {/* <div className="flex justify-center gap-2">
            {array
              .slice(
                pagination.page === 1
                  ? 0
                  : (pagination.page - 1) * pagination.per_page,
                pagination.page === 1
                  ? pagination.per_page
                  : pagination.page * pagination.per_page
              )
              .map((id) => (
                <p key={id.id}>{id.id}</p>
              ))}
          </div> */}
        </div>
      </div>
    </>
  );
};
