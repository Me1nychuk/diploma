import { Opinion, Comment as TComment } from "@/types";
import { memo } from "react";
import { Button } from "@/shared/components/ui";
import { Loader } from "lucide-react";

interface CommentsProps {
  comments: TComment[] | Opinion[];
  author?: string;
  isLoading?: boolean;
  isNext?: boolean;
  getMore?: () => void;
}

const CommentsComponent: React.FC<CommentsProps> = ({
  comments,
  author,
  isNext,
  getMore,
  isLoading,
}) => {
  return (
    <>
      <h2 className=" font-bold ml-3">Коментарі</h2>
      <ul className="comments-block ">
        {comments.length > 0 ? (
          <>
            {comments.map((comment) => (
              <li key={comment.id} className="glass-2">
                <div className="title-block">
                  {comment.author ? (
                    <p className="author">
                      {author === comment.author.id
                        ? "Ви"
                        : comment.author.fullname}
                    </p>
                  ) : (
                    <p className="author">Гість</p>
                  )}
                  <p className="date">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <p className="text">{comment.content}</p>
              </li>
            ))}
          </>
        ) : (
          <p className="text-center font-bold">Немає коментарів</p>
        )}
      </ul>
      {comments.length > 0 && (
        <Button
          className="w-[calc(100%-48px)] mx-6 bg-secondary rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isNext || isLoading}
          onClick={getMore}
        >
          {isLoading ? (
            <Loader className="animate-spin" />
          ) : (
            "Більше коментарів"
          )}
        </Button>
      )}
    </>
  );
};

export const Comments = memo(CommentsComponent);
