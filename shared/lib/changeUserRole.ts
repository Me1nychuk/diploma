import { Role } from "@/types";
import { updateUser } from "../services";
import toast from "react-hot-toast";

export const changeUserRole = async (id: string, role: Role) => {
  try {
    const res = await updateUser(id, { role });
    if ("error" in res) throw new Error(res.error);
    toast.success("Роль успішно змінена!, перезавантажте сторінку");
  } catch (error) {
    console.error(error);
    toast.error("Помилка при зміні ролі!");
  }
};
