import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useSearchParamsCust = () => {
  const searchParams = useSearchParams();
  const route = useRouter();

  const [params, setParams] = useState({
    per_page: searchParams.get("per_page") || undefined,
    page: searchParams.get("page") || undefined,
    search: searchParams.get("search") || undefined,
    sortBy: searchParams.get("sortBy") || undefined,
    order: searchParams.get("order") || undefined,
    authorId: searchParams.get("authorId") || undefined,
  });

  const updateParameters = () => {
    const queryParams = new URLSearchParams();

    if (params.per_page) queryParams.set("per_page", params.per_page);
    if (params.page) queryParams.set("page", params.page);
    if (params.search) queryParams.set("search", params.search);
    if (params.sortBy) queryParams.set("sortBy", params.sortBy);
    if (params.order) queryParams.set("order", params.order);
    if (params.authorId) queryParams.set("authorId", params.authorId);

    route.push(`?${queryParams.toString()}`);
  };
  const updateSortType = (type: string) => {
    setParams((prev) => ({
      ...prev,
      sortBy: type,
    }));
  };
  const updateOrder = (newOrder: string) => {
    setParams((prev) => ({
      ...prev,
      order: newOrder,
    }));
  };

  const updateSearch = (newSearch: string) => {
    setParams((prev) => ({
      ...prev,
      search: newSearch,
    }));
  };

  const updatePage = (newPage: number) => {
    setParams((prev) => ({
      ...prev,
      page: String(newPage),
    }));
  };

  const updateAuthorId = (newAuthorId: string) => {
    setParams((prev) => ({
      ...prev,
      authorId: newAuthorId,
    }));
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setParams({
        per_page: searchParams.get("per_page") || undefined,
        page: searchParams.get("page") || undefined,
        search: searchParams.get("search") || undefined,
        sortBy: searchParams.get("sortBy") || undefined,
        order: searchParams.get("order") || undefined,
        authorId: searchParams.get("authorId") || undefined,
      });
    }
  }, [searchParams]);

  useEffect(() => {
    if (isMounted) {
      updateParameters();
    }
  }, [params]);

  return {
    getParams: params,
    setParams,
    updateSortType,
    updateOrder,
    updateSearch,
    updatePage,
    updateAuthorId,
  };
};
