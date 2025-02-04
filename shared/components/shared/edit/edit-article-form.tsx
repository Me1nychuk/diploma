import { Button, Input, Textarea } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import { PopupConfirm } from "../popup-confirm";

interface EditArticleFormProps {
  className?: string;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  onSubmit: () => void;
  onDelete: () => void;
  onSubmitText?: string;
  onDeleteText?: string;
}
export const EditArticleForm: React.FC<EditArticleFormProps> = ({
  className,
  title,
  setTitle,
  description,
  setDescription,
  onSubmit,
  onDelete,
  onSubmitText = "Зберегти",
  onDeleteText = "Видалити",
}) => {
  return (
    <>
      <div className={cn("flex flex-col gap-2", className)}>
        <Input
          placeholder="Введіть назву поста.."
          type="text"
          className="border-[1px] rounded-xl focus:border-accent bg-background"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Введіть опис поста.."
          rows={15}
          className="resize-none border-[1px]  bg-background  rounded-[10px] focus:border-accent
          overflow-x-hidden
          max-sm:text-sm"
          id="custom-scrollbar"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p className="text-sm opacity-80 text-center">
          * Для створення абзацу використовуйте тег &lt;p&gt; та &lt;/p&gt;,
          тобто описуйте абзац отак - &lt;p&gt; КОНТЕНТ... &lt;/p&gt;
        </p>
        <Button
          className="rounded-xl max-sm:text-base text-black bg-green-400 text-xl font-bold hover:bg-white hover:text-green-400 transition-all duration-200 "
          onClick={onSubmit}
        >
          {onSubmitText}
        </Button>

        <PopupConfirm onClick={onDelete}>
          <Button className="rounded-xl text-black bg-red-400 text-xl font-bold hover:bg-white hover:text-red-400 transition-all duration-200 ">
            {onDeleteText}
          </Button>
        </PopupConfirm>
      </div>
    </>
  );
};
