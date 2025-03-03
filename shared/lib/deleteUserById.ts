import toast from "react-hot-toast";
import { deleteUser } from "../services";

export const deleteUserById = async (id: string) => {
  try {
    const res = await deleteUser(id);
    if ("error" in res) throw new Error(res.error);
    toast.success("Користувач успішно видалено!");
  } catch (error) {
    console.error(error);
    toast.error("Помилка при видаленні користувача!");
  }
};
