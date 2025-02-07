import { updateDiscussion } from "@/shared/services";

const verifyDiscussionById = async (id: string) => {
  const res = await updateDiscussion(id, { isApproved: true });

  return res;
};

export default verifyDiscussionById;
