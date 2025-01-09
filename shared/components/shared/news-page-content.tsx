"use client";
import React from "react";
import { Button, Input } from "@/shared/components/ui";

import {
  NewsBlock,
  // Pagination,
  SelectSortType,
} from "@/shared/components/shared";
import { Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/shared/store/store";
import { apiGetNews } from "@/shared/store/data/operations";
import { useSearchParamsCust } from "@/shared/hooks";

export const NewsPageContent: React.FC = () => {
  const news = useAppSelector((state) => state.data.data.news);
  const dispatch = useAppDispatch();
  const params = useSearchParamsCust();
  console.log(params);
  React.useEffect(() => {
    dispatch(
      apiGetNews({
        per_page: params.getParams.per_page || "10",
        page: params.getParams.page || "1",
        search: params.getParams.search || "",
        sortBy: (params.getParams.sortBy as "title" | "date") || "title",
        order: (params.getParams.order as "asc" | "desc") || "asc",
      })
    );
  }, [dispatch, params.getParams]);
  // useDebounce
  return (
    <>
      <div className="">
        <h1 className="font-bold text-4xl max-sm:text-3xl text-center mb-5 ">
          Новини кафедри
        </h1>
        <Button
          onClick={() =>
            params.setParams({
              ...params.getParams,
              page: "2",
            })
          }
        >
          Оновити параметри
        </Button>
        <Button
          onClick={() =>
            params.setParams({
              ...params.getParams,
              per_page: "1",
            })
          }
        >
          Оновити параметри
        </Button>
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
          {news && news.data?.map((news) => <p key={news.id}>{news.title}</p>)}
          {/* <NewsBlock /> */}

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
