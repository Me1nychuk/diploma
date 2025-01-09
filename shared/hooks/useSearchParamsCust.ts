import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useSearchParamsCust = () => {
  const searchParams = useSearchParams();
  const route = useRouter();

  const [params, setParams] = useState({
    per_page: searchParams.get("per_page"),
    page: searchParams.get("page"),
    search: searchParams.get("search"),
    sortBy: searchParams.get("sortBy"),
    order: searchParams.get("order"),
  });

  const updateParameters = () => {
    const queryParams = new URLSearchParams();

    if (params.per_page) queryParams.set("per_page", params.per_page);
    if (params.page) queryParams.set("page", params.page);
    if (params.search) queryParams.set("search", params.search);
    if (params.sortBy) queryParams.set("sortBy", params.sortBy);
    if (params.order) queryParams.set("order", params.order);

    route.push(`?${queryParams.toString()}`);
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setParams({
        per_page: searchParams.get("per_page"),
        page: searchParams.get("page"),
        search: searchParams.get("search"),
        sortBy: searchParams.get("sortBy"),
        order: searchParams.get("order"),
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
  };
};
