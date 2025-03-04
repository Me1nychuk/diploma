import toast from "react-hot-toast";
import { updateUser } from "../services";

export const blockUserById = async (id: string, isBlocked: boolean) => {
  try {
    const res = await updateUser(id, { isBlocked: isBlocked });
    if ("error" in res) throw new Error(res.error);
    toast.success(
      `Користувач був ${isBlocked ? "заблокований" : "розблокований"}!`
    );
  } catch (error) {
    console.error(error);
    toast.error(
      `Помилка ${isBlocked ? "заблокування" : "розблокування"} користувача!`
    );
  }
};
