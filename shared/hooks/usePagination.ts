import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface PaginationState {
  page: number;
  per_page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
}

export const usePagination = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = React.useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    page: Number(searchParams.get("page")) || 1,
    per_page: Number(searchParams.get("per_page")) || 5,
    hasNextPage: true,
    hasPrevPage: false,
    totalPages: 1,
  });

  const nextPage = () => {
    setPagination((prev) => ({
      ...prev,
      hasNextPage: pagination.page + 1 < pagination.totalPages,
      hasPrevPage: pagination.page + 1 > 1,
      page: prev.page + 1,
    }));
  };
  const previousPage = () => {
    setPagination((prev) => ({
      ...prev,
      hasNextPage: pagination.page - 1 < pagination.totalPages,
      hasPrevPage: pagination.page - 1 > 1,
      page: prev.page - 1,
    }));
  };
  const changeTotalPages = (newAmount: number) => {
    setPagination((prev) => ({
      ...prev,
      totalPages: newAmount,
      page: 1,
    }));
  };

  React.useEffect(() => {
    if (mounted) {
      router.push(`?page=${pagination.page}&per_page=${pagination.per_page}`, {
        scroll: false,
      });
      console.log("Total pages");
    }
  }, [pagination.page, pagination.per_page]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return { pagination, nextPage, previousPage, changeTotalPages };
};
