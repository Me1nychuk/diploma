"use client";
import { cn } from "@/shared/lib/utils";
import { createComment, fetchNewsById } from "@/shared/services";
import { useAppSelector } from "@/shared/store/store";
import { News, Role } from "@/types";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  Comments,
  MiniGallery,
  PopupConfirm,
} from "@/shared/components/shared/";
import { Button, Label, Textarea } from "@/shared/components/ui";
import deletePostById from "@/shared/lib/deletePostById";
import toast from "react-hot-toast";

interface NewsArticleProps {
  className?: string;
  id: string;
}

const NewsArticle: React.FC<NewsArticleProps> = ({ id, className }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setError] = React.useState(false);
  const [news, setNews] = React.useState<News>();
  const [comment, setComment] = React.useState("");
  const { currentUser } = useAppSelector((state) => state.user);

  const handleComment = async () => {
    try {
      setIsLoading(true);
      setError(false);
      if (comment.trim().length == 0) return;
      await createComment({ newsId: id, content: comment });
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
      const res = await deletePostById(id, true);

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

  useEffect(() => {
    const getNews = async () => {
      try {
        setIsLoading(true);
        const res = await fetchNewsById(id);
        if (res.statusCode !== 200) {
          setError(true);
        } else {
          setNews(res.data);
          setError(false);
        }
      } catch (err: unknown) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getNews();
  }, [id]);
  return (
    <div className={cn("w-full", className)}>
      {isLoading && <Loader2 className="animate-spin mx-auto my-5" size={40} />}
      {isError && !isLoading && (
        <h2 className="text-3xl font-bold  text-center my-5">
          Сталась помилка, не вийшло завантажити пост.
        </h2>
      )}
      {!isLoading && !isError && news && (
        <>
          <div className="flex flex-col items-start justify-between gap-2 max-sm:px-2 px-4 mb-5">
            <h1 className="text-3xl font-bold  my-5">{news.title}</h1>

            <p className="text-sm  min-sm:self-end">
              Дата публікації: {new Date(news.createdAt).toLocaleDateString()}
            </p>
            {currentUser?.role === Role.ADMIN && (
              <Link
                className="absolute top-[100px] right-5 cursor-pointer text-[12px] hover:opacity-75 transition-all duration-100"
                href={`/news/${id}/edit`}
              >
                Редагувати
              </Link>
            )}
            {currentUser?.role === Role.ADMIN && (
              <PopupConfirm onClick={handleDelete}>
                <Button className="block w-full p-1 mt-5  bg-red-500 rounded-xl  text-center cursor-pointer text-lg hover:opacity-75 transition-all duration-100">
                  Видалити
                </Button>
              </PopupConfirm>
            )}
          </div>

          {news.imageUrl.length > 0 && (
            <MiniGallery gallery={news.imageUrl} title={news.title} />
          )}

          {news.content ? (
            <div
              className="description-content"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          ) : (
            <p className="text-lg">Немає опису..</p>
          )}
          <div className="bg-text h-[1px] w-full mb-2 mt-9"></div>
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
          <Comments comments={news.comments} author={currentUser?.id} />
        </>
      )}
    </div>
  );
};

export { NewsArticle };
