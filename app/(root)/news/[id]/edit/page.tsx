"use client";
import { EditArticleForm } from "@/shared/components/shared";
import {
  deleteDiscussion,
  deleteNews,
  fetchDiscussionById,
  fetchNewsById,
  updateDiscussion,
  updateNews,
} from "@/shared/services";
import { useAppSelector } from "@/shared/store/store";
import { Discussion, News, Role } from "@/types";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

interface PageProps {
  params: { id: string };
}

const NewsEditPage: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const isNews = window.location.pathname.includes("news");
  const [isLoading, setIsLoading] = React.useState(true);
  const { currentUser } = useAppSelector((state) => state.user);
  const [data, setData] = React.useState<News | Discussion>();
  const [newData, setNewData] = React.useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });
  const setTitle = (title: string) => {
    setNewData((prev) => ({ ...prev, title }));
  };
  const setDescription = (description: string) => {
    setNewData((prev) => ({ ...prev, description }));
  };

  const onSubmit = async () => {
    try {
      if (newData.title.trim().length < 5) {
        toast.error("Заголовок повинен містити не менше 5 символів");
        return;
      }
      if (isNews) {
        await updateNews(id, {
          title: newData.title.trim(),
          content: newData.description.trim(),
        });
      } else {
        await updateDiscussion(id, {
          title: newData.title.trim(),
          content: newData.description.trim(),
        });
      }
      toast.success("Новина успішно оновлена!");
    } catch (error) {
      console.error(error);
      toast.error("Нажаль не вдалося оновити новину");
    }
  };

  const handleDelete = async () => {
    try {
      if (isNews) {
        await deleteNews(id);
      } else {
        await deleteDiscussion(id);
      }
      toast.success("Новина успішно видалена!");
      router.push("/news");
    } catch (error) {
      console.error(error);
      toast.error("Нажаль не вдалося видалити новину");
    }
  };
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = isNews
          ? await fetchNewsById(id)
          : await fetchDiscussionById(id);

        if (!response.data) {
          throw new Error("Новина не знайдена!");
        }
        setData(response.data);
        setNewData((prev) => ({
          ...prev,
          title: response.data.title,
          description: response.data.content,
        }));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, [id, isNews]);
  return (
    <>
      {isLoading && (
        <Loader2 className=" animate-spin mx-auto mt-2" size={40}></Loader2>
      )}
      {!isLoading &&
        data &&
        id &&
        ((!isNews &&
          (currentUser?.id === (data as Discussion).authorId ||
            currentUser?.role === Role.ADMIN)) ||
          (isNews && currentUser?.role === Role.ADMIN)) && (
          <div className="">
            <p className="mt-50 text-4xl text-center font-bold mb-5">
              Редагування
            </p>

            <EditArticleForm
              title={newData.title}
              setTitle={setTitle}
              description={newData.description}
              setDescription={setDescription}
              onSubmit={onSubmit}
              onDelete={handleDelete}
            />
          </div>
        )}
      {!isLoading &&
        ((!isNews &&
          (currentUser?.id !== (data as Discussion).authorId ||
            currentUser?.role !== Role.ADMIN)) ||
          (isNews && currentUser?.role !== Role.ADMIN && (
            <h2 className="text-center text-lg">
              Вибачте, ви не маєте прав для редагування цього посту
            </h2>
          )))}

      {!isLoading && !data && (
        <div className="flex flex-col items-center">
          <h2 className="text-center text-lg mb-8">Новина не знайдена!</h2>
          <Link
            className=" block  py-2 px-3  bg-background rounded-xl  text-center font-bold text-sm text-text cursor-pointer hover:opacity-80"
            href={isNews ? "/news" : "/discussions"}
          >
            До списку {isNews ? "новин" : "дискусій"}
          </Link>
        </div>
      )}
    </>
  );
};

export default NewsEditPage;
