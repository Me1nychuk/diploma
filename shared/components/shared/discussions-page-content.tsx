"use client";
import React from "react";
import {
  NewsBlock,
  Pagination,
  SearchInput,
  SelectSortType,
} from "@/shared/components/shared";
import { Loader2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/shared/store/store";
import { useSearchParamsCust } from "@/shared/hooks";
import { apiGetDiscussions } from "@/shared/store/data/operations";

interface DiscussionsPageContentProps {
  className?: string;
}

const DiscussionsPageContent: React.FC<DiscussionsPageContentProps> = ({}) => {
  const {
    isLoading,
    data: { discussions },
  } = useAppSelector((state) => state.data);

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
      apiGetDiscussions({
        per_page: params.getParams.per_page || "10",
        page: params.getParams.page || "1",
        search: params.getParams.search || "",
        sortBy: (params.getParams.sortBy as "title" | "date") || "title",
        order: (params.getParams.order as "asc" | "desc") || "asc",
        authorId: params.getParams.authorId || "",
      })
    );
  }, [dispatch, params.getParams]);

  return (
    <>
      <div className="">
        <h1 className="font-bold text-4xl max-sm:text-3xl text-center mb-5 ">
          Обговорення
        </h1>

        <div>
          <div className="flex max-sm:flex-col gap-5 justify-between mb-5">
            <SearchInput
              value={params.getParams.search || ""}
              onChange={params.updateSearch}
            />
            <div className="flex gap-5 max-sm:justify-between">
              <SelectSortType
                values={sortValues}
                selected={
                  params.getParams.sortBy ? params.getParams.sortBy : "date"
                }
                onChange={params.updateSortType}
                label="за чим сортувати"
              />
              <SelectSortType
                values={orderValues}
                selected={
                  params.getParams.order ? params.getParams.order : "asc"
                }
                onChange={params.updateOrder}
                label="як сортувати"
              />
            </div>
          </div>
          {!isLoading && <NewsBlock news={discussions?.data} />}
          {isLoading && (
            <Loader2 className="animate-spin mx-auto my-5" size={40} />
          )}
          {discussions?.page &&
            discussions?.totalPages &&
            discussions?.totalPages && (
              <Pagination
                classname="absolute bottom-[100px] left-1/2 -translate-x-1/2"
                hasNextPage={discussions.page < discussions.totalPages}
                hasPrevPage={discussions.page > 1}
                totalPages={discussions.totalPages}
                page={discussions.page}
                nextPage={() => {
                  params.updatePage(Number(discussions.page) + 1);
                }}
                previousPage={() => {
                  params.updatePage(Number(discussions.page) - 1);
                }}
              />
            )}
        </div>
      </div>
    </>
  );
};

export { DiscussionsPageContent };
