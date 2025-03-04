"use client";

import { useSearchParamsCust } from "@/shared/hooks";
import { apiGetUsers } from "@/shared/store/data/operations";
import { useAppDispatch, useAppSelector } from "@/shared/store/store";
import React from "react";
import { Pagination, SearchInput, SelectSortType } from "../controls";
import { Loader2 } from "lucide-react";
import { UserList } from "./user-list";
import { Role } from "@/types";
import Link from "next/link";

interface UsersPageContentProps {
  className?: string;
}

const UsersPageContent: React.FC<UsersPageContentProps> = ({}) => {
  const {
    isLoading,
    data: { users },
  } = useAppSelector((state) => state.data);

  const currentUser = useAppSelector((state) => state.user.currentUser);

  const dispatch = useAppDispatch();
  const params = useSearchParamsCust();
  const sortValues = {
    title: "За ім'ям",
    date: "За датою",
  };
  const orderValues = {
    asc: "По зростанню",
    desc: "По спаданню",
  };

  React.useEffect(() => {
    dispatch(
      apiGetUsers({
        perPage: params.getParams.per_page || "10",
        page: params.getParams.page || "1",
        nameOrEmail: params.getParams.search || "",
        sortBy: (params.getParams.sortBy as "title" | "date") || "title",
        order: (params.getParams.order as "asc" | "desc") || "asc",
      })
    );
  }, [dispatch, params.getParams]);
  if (!currentUser || currentUser.role !== Role.ADMIN) {
    return (
      <>
        <h2 className="text-text text-2xl text-center">
          Ви не маєте доступу до цього контенту
        </h2>
        <Link
          href="/"
          className="mt-5 w-[200px] cursor-pointer text-center mx-auto  block p-2 bg-text text-background rounded-xl hover:opacity-60 opacity-100 transition-all duration-200  "
        >
          На головну
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="">
        <h1 className="font-bold text-4xl max-sm:text-3xl text-center mb-5 ">
          Користвачі
        </h1>

        <div>
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

          {!isLoading && <UserList users={users?.data} />}
          {isLoading && (
            <Loader2 className="animate-spin mx-auto my-5" size={40} />
          )}
          {users?.page && users?.totalPages && users?.totalPages && (
            <Pagination
              classname="absolute bottom-[100px] left-1/2 -translate-x-1/2"
              hasNextPage={users.page < users.totalPages}
              hasPrevPage={users.page > 1}
              totalPages={users.totalPages}
              page={users.page}
              nextPage={() => {
                params.updatePage(Number(users.page) + 1);
              }}
              previousPage={() => {
                params.updatePage(Number(users.page) - 1);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export { UsersPageContent };
