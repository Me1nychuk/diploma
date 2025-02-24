import { useEffect, useState } from "react";
import { fetchComments, fetchOpinions } from "../services";
import { Comment, FecthError, Opinion, PaginatedResponse } from "@/types";
import { set } from "date-fns";

export const useFetchComments = (id: string) => {
  const isNews = window.location.pathname.includes("news");
  const [comments, setComments] = useState<Comment[] | Opinion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNext, setIsNext] = useState(true);
  const [page, setPage] = useState(1);

  const getComments = async () => {
    try {
      setIsLoading(true);
      if (isNews) {
        const response:
          | { statusCode: number; data: PaginatedResponse<Comment> }
          | FecthError = await fetchComments({
          newsId: id,
          page: page.toString(),
          per_page: "5",
          order: "asc",
          authorId: "",
        });

        if ("error" in response) {
          console.error(response.error);
          throw new Error(response.error);
        }
        setIsNext(response.data.page < response.data.totalPages);
        setComments((prev) => [...(prev as Comment[]), ...response.data.data]);
      } else {
        const response:
          | { statusCode: number; data: PaginatedResponse<Opinion> }
          | FecthError = await fetchOpinions({
          discussionId: id,
          page: page.toString(),
          per_page: "5",
          order: "asc",
          authorId: "",
        });
        if ("error" in response) {
          console.error(response.error);
          throw new Error(response.error);
        }

        setIsNext(response.data.page < response.data.totalPages);
        setComments((prev) => [...(prev as Opinion[]), ...response.data.data]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const getMore = () => {
    if (isNext) {
      setPage((prev) => prev + 1);
    }
  };

  const deleteComment = (id: string) => {
    if (isNews) {
      setComments((prev) =>
        (prev as Comment[]).filter((comment) => comment.id !== id)
      );
    } else {
      setComments((prev) =>
        (prev as Opinion[]).filter((comment) => comment.id !== id)
      );
    }
  };
  useEffect(() => {
    getComments();
  }, [page]);

  return { comments, isNext, isLoading, getMore, deleteComment };
};
