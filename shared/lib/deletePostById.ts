import { deleteDiscussion, deleteNews } from "../services";

const deletePostById = async (id: string, isNews: boolean) => {
  if (isNews) {
    return await deleteNews(id);
  } else {
    return await deleteDiscussion(id);
  }
};
export default deletePostById;
