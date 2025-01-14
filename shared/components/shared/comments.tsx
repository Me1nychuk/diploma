import { Comment as TComment } from "@/types";

interface CommentsProps {
  comments: TComment[];
  author?: string;
}

const Comments: React.FC<CommentsProps> = ({ comments, author }) => {
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
    </>
  );
};

export { Comments };
