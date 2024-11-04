import React from "react";
import type { Metadata } from "next";
import { Input } from "@/shared/components/ui";

import { NewsBlock, SelectSortType } from "@/shared/components/shared";

export const metadata: Metadata = {
  title: "NUWM | News",
  description: "Новини кафедри, останні події, додаткова інформація",
};

const News: React.FC = () => {
  return (
    <>
      <div className="">
        <h1 className="font-bold text-4xl max-sm:text-3xl text-center mb-5 ">
          Новини кафедри
        </h1>

        <div className="border-red-500 border-2">
          <div className="flex max-sm:flex-col gap-5 justify-between mb-5 border-green-800 border-2">
            <div className="flex items-center gap-2 bg-tertiary text-background px-3 py-1 rounded-xl">
              <Search />
              <Input
                placeholder="Пошук"
                className="max-w-full p-0 border-none"
              />
            </div>
            <SelectSortType />
          </div>
          <div className="border-blue-500 border-2">
            <NewsBlock />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
