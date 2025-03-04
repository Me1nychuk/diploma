"use client";
import {
  createOpinion,
  deleteOpinion,
  fetchDiscussionById,
} from "@/shared/services";
import { useAppSelector } from "@/shared/store/store";
import { Discussion, Role } from "@/types";
import React, { useCallback, useEffect } from "react";
import { Button, Label, Textarea } from "@/shared/components/ui";
import { Comments, PopupConfirm } from "@/shared/components/shared";
import { cn } from "@/shared/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import verifyDiscussionById from "@/shared/lib/verifyDiscussionById";
import toast from "react-hot-toast";
import deletePostById from "@/shared/lib/deletePostById";
import { useFetchComments } from "@/shared/hooks/useFetchComments";

interface DiscussionArticleProps {
  id: string;
  className?: string;
}

const DiscussionArticle: React.FC<DiscussionArticleProps> = ({
  id,
  className,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setError] = React.useState(false);
  const [discussion, setDiscussion] = React.useState<Discussion>();
  const [comment, setComment] = React.useState("");
  const {
    comments,
    getMore,
    isNext,
    isLoading: isLoadingComments,
    deleteComment,
  } = useFetchComments(id);

  const { currentUser } = useAppSelector((state) => state.user);

  const handleComment = async () => {
    try {
      setIsLoading(true);
      setError(false);
      if (comment.trim().length == 0) return;
      await createOpinion({ discussionId: id, content: comment });
    } catch (err: unknown) {
      console.log(err);
      setError(true);
    } finally {
      setComment("");
      setIsLoading(false);
    }
  };
  const handleDelete = async () => {
    try {
      const res = await deletePostById(id, false);

      if (res.statusCode !== 200) {
        throw new Error(res.error);
      }
      toast.success("Пост успішно видалено!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Помилка при видаленні посту! ");
    }
  };
  const handleVerefy = async () => {
    try {
      const res = await verifyDiscussionById(id);

      if (res.statusCode !== 200) {
        throw new Error(res.error);
      }
      toast.success("Пост успішно верифіковано!");
      window.location.reload();
    } catch (err: unknown) {
      console.log(err);

      toast.error("Помилка при верифікації посту! ");
    }
  };

  const handleDeleteComment = useCallback(async (id: string) => {
    try {
      await deleteOpinion(id);
      deleteComment(id);
      toast.success("Коментар успішно видалено!");
    } catch (err: unknown) {
      console.log(err);
      toast.error("Помилка при видаленні коментаря!");
    }
  }, []);

  const isAvailableToDelete = useCallback(
    (authourId: string) => {
      return authourId === currentUser?.id || currentUser?.role === Role.ADMIN;
    },
    [currentUser]
  );

  useEffect(() => {
    const getDiscussion = async () => {
      try {
        setIsLoading(true);
        const res = await fetchDiscussionById(id);
        if (res.statusCode !== 200) {
          setError(true);
        } else {
          setDiscussion(res.data);
          setError(false);
        }
      } catch (err: unknown) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getDiscussion();
  }, [id]);
  return (
    <div className={cn("w-full", className)}>
      {isLoading && <Loader2 className="animate-spin mx-auto my-5" size={40} />}
      {isError && !isLoading && (
        <h2 className="text-3xl font-bold  text-center my-5">
          Сталась помилка, не вийшло завантажити пост.
        </h2>
      )}
      {!isError &&
        !discussion?.isApproved &&
        currentUser?.role !== Role.ADMIN && (
          <h2 className="text-3xl font-bold  text-center my-5">
            Сталась помилка, здається це пост ще не існує.
          </h2>
        )}
      {!isLoading && !isError && discussion && (
        <>
          <div className="flex flex-col items-start justify-between gap-2 max-sm:px-2 px-4 mb-5">
            <h1 className="text-3xl font-bold  my-5">{discussion.title}</h1>

            <p className="text-sm  min-sm:self-end">
              Дата публікації:{" "}
              {new Date(discussion.createdAt).toLocaleDateString()}
            </p>
          </div>

          {discussion.content ? (
            <div
              className="description-content"
              dangerouslySetInnerHTML={{ __html: discussion.content }}
            />
          ) : (
            <p className="text-lg mb-5 ml-2">Немає опису..</p>
          )}
          {(currentUser?.role === Role.ADMIN ||
            currentUser?.id === discussion.author.id) && (
            <Link
              className="block p-1 mt-2  bg-accent rounded-xl  text-center cursor-pointer text-lg hover:opacity-75 transition-all duration-100"
              href={`/discussions/${id}/edit`}
            >
              Редагувати
            </Link>
          )}
          {(currentUser?.role === Role.ADMIN ||
            currentUser?.id === discussion.author.id) && (
            <PopupConfirm onClick={handleDelete}>
              <Button className="block w-full p-1 mt-5  bg-red-500 rounded-xl  text-center cursor-pointer text-lg hover:opacity-75 transition-all duration-100">
                Видалити
              </Button>
            </PopupConfirm>
          )}
          <div className="bg-text h-[1px] w-full mb-2 mt-9"></div>
          {currentUser?.role === Role.ADMIN && !discussion.isApproved && (
            <Button
              onClick={handleVerefy}
              className="w-full rounded-xl font-bold hover:bg-green-400"
            >
              Верифікувати
            </Button>
          )}
          {currentUser?.id ? (
            <>
              <div className="glass-2 m-5 p-2 rounded-xl">
                <Label className="text-xl  ml-2" htmlFor="new-comment">
                  Ваш коментар
                </Label>

                <Textarea
                  id="new-comment"
                  placeholder="Введіть ваш коментар...."
                  maxLength={500}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className=" h-24 rounded-xl bg-transparent resize-none mb-3 text-sm placeholder:opacity-55 "
                />
                <Button
                  onClick={handleComment}
                  className="w-full bg-accent  rounded-xl "
                >
                  Надіслати
                </Button>
              </div>
            </>
          ) : (
            <p className="text-sm text-center">
              Тільки зареєстровані користувачі можуть коментувати😮
            </p>
          )}
          <div className="bg-text h-[1px] w-full my-2 "></div>

          <Comments
            comments={comments}
            author={currentUser?.id}
            isLoading={isLoadingComments}
            getMore={getMore}
            isNext={isNext}
            onDelete={handleDeleteComment}
            isAvailableToDelete={isAvailableToDelete}
          />
        </>
      )}
    </div>
  );
};

export { DiscussionArticle };
