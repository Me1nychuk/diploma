"use client";
import React from "react";
import {
  NewsBlock,
  Pagination,
  SearchInput,
  SelectSortType,
} from "@/shared/components/shared";
import { useAppDispatch, useAppSelector } from "@/shared/store/store";
import { apiGetNews } from "@/shared/store/data/operations";
import { useSearchParamsCust } from "@/shared/hooks";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Role } from "@/types";

export const NewsPageContent: React.FC = () => {
  const {
    isLoading,
    data: { news },
  } = useAppSelector((state) => state.data);
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  const params = useSearchParamsCust();
  const sortValues = {
    title: "За назвою",
    date: "За датою",
  };
  const orderValues = {
    asc: "По зростанню",
    desc: "По спаданню",
  };

  React.useEffect(() => {
    dispatch(
      apiGetNews({
        per_page: params.getParams.per_page || "10",
        page: params.getParams.page || "1",
        search: params.getParams.search || "",
        sortBy: (params.getParams.sortBy as "title" | "date") || "date",
        order: (params.getParams.order as "asc" | "desc") || "desc",
      })
    );
  }, [dispatch, params.getParams]);

  return (
    <>
      <div className="">
        <h1 className="font-bold text-4xl max-sm:text-3xl text-center mb-5 ">
          Новини кафедри
        </h1>

        <div className="max-sm:pb-16">
          <div className="flex max-sm:flex-col gap-5 justify-between mb-5">
            <SearchInput
              value={params.getParams.search || ""}
              onChange={params.updateSearch}
            />
            <div className="flex max-xs:flex-col gap-5 max-sm:justify-between">
              <SelectSortType
                className="max-xs:w-full"
                values={sortValues}
                selected={
                  params.getParams.sortBy ? params.getParams.sortBy : "date"
                }
                onChange={params.updateSortType}
                label="за чим сортувати"
              />
              <SelectSortType
                className="max-xs:w-full"
                values={orderValues}
                selected={
                  params.getParams.order ? params.getParams.order : "asc"
                }
                onChange={params.updateOrder}
                label="як сортувати"
              />
            </div>
          </div>
          {currentUser && currentUser?.role === Role.ADMIN && (
            <Link
              href={"/news/create"}
              className="block p-2 mb-5 bg-background rounded-xl text-center hover:bg-accent transition-all duration-200"
            >
              Створити новину
            </Link>
          )}
          {!isLoading && <NewsBlock news={news?.data} />}
          {isLoading && (
            <Loader2 className="animate-spin mx-auto my-5" size={40} />
          )}
          {news?.page && news?.totalPages && news?.totalPages && (
            <Pagination
              classname="absolute bottom-[100px] left-1/2 -translate-x-1/2"
              hasNextPage={news.page < news.totalPages}
              hasPrevPage={news.page > 1}
              totalPages={news.totalPages}
              page={news.page}
              nextPage={() => {
                params.updatePage(Number(news.page) + 1);
              }}
              previousPage={() => {
                params.updatePage(Number(news.page) - 1);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};
