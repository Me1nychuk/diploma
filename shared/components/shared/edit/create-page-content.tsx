"use client";
import React from "react";
import { EditableList, EditArticleForm } from "@/shared/components/shared";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/shared/store/store";
import toast from "react-hot-toast";
import { createDiscussion, createNews } from "@/shared/services";

interface CreatePageContentProps {
  className?: string;
}

const CreatePageContent: React.FC<CreatePageContentProps> = ({ className }) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const isNews = window.location.pathname.includes("news");
  const router = useRouter();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [photos, setPhotos] = React.useState<string[]>([]);

  const onSubmit = async () => {
    try {
      if (title.trim().length < 5) {
        toast.error("Заголовок повинен містити не менше 5 символів");
        return;
      }
      if (isNews && description.trim().length == 0) {
        toast.error("Опис повинен бути заповнений");
        return;
      }
      if (isNews) {
        const res = await createNews({
          title: title.trim(),
          content: description.trim(),
          imageUrl: photos,
        });
        if (!res || res.statusCode !== 201) {
          toast.error("Нажаль не вдалося створити новину");
          return;
        }
      } else {
        const res = await createDiscussion({
          title: title.trim(),
          content: description.trim(),
        });
        if (!res || res.statusCode !== 201) {
          toast.error("Нажаль не вдалося створити обговорення");
          return;
        }
      }

      setTitle("");
      setDescription("");
      setPhotos([]);
      toast.success(
        isNews
          ? "Новина успішно створена!"
          : "Обговорення успішно створено!\nОчікуйте переверіфікації адміністратором",
        {
          duration: 10000,
        }
      );
      router.push(isNews ? "/news" : "/discussions");
    } catch (error) {
      console.error(error);
      toast.error("Нажаль не вдалося створити пост");
    }
  };
  const onDelete = () => {
    router.push(isNews ? "/news" : "/discussions");
  };
  if (!currentUser) {
    return (
      <p className="mt-36 text-3xl text-center font-bold ">
        Нажаль, ви не авторизовані, тому ви не можете виконати цю дію.
      </p>
    );
  }
  if (isNews && currentUser.role !== "ADMIN") {
    <p className="mt-36 text-3xl text-center font-bold ">
      Здається, ви не маєте доступу до створення новин.
    </p>;
  }
  return (
    <div className={className}>
      <h1 className="mt-50 text-4xl text-center font-bold mb-5">
        {isNews ? "Створити новину" : "Створити обговорення"}
      </h1>
      {isNews && <EditableList array={photos} setArray={setPhotos} />}
      <EditArticleForm
        onSubmit={onSubmit}
        onDelete={onDelete}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        onSubmitText="Створити"
        onDeleteText="Повернутись назад"
      />
    </div>
  );
};

export { CreatePageContent };
