import { User } from "@/types";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";

interface UserListProps {
  className?: string;
  users: User[] | undefined;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users ? (
        <Table className="max-w-full  max-h-80">
          <TableHeader>
            <TableRow>
              <TableHead className="text-left ">Ім'я</TableHead>
              <TableHead className="p-0">
                <span className="hidden min-xs:block">Пошта</span>
                <span className="block min-xs:hidden">📧</span>
              </TableHead>
              <TableHead className="p-0">
                <span className="hidden min-xs:block">Верифікований</span>
                <span className="block min-xs:hidden">✅</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((el) => (
              <TableRow key={el.id}>
                <TableCell className="text-left line-clamp-2 pl-2">
                  <Link
                    className="hover:opacity-80 hover:underline transition-all duration-100 "
                    href={"/users/" + el.id}
                  >
                    {el.fullname}
                  </Link>
                </TableCell>

                <TableCell className="text-nowrap ">
                  {el?.email || "Google"}
                </TableCell>
                <TableCell
                  className={cn(
                    "font-bold text-black",
                    el.isVerified ? "bg-green-300 " : "bg-red-300 "
                  )}
                >
                  {el.isVerified ? "Так" : "Ні"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className=" border-[1px] border-text rounded-xl w-full p-2 text-center">
          Немає користувачів
        </div>
      )}
    </>
  );
};

export { UserList };
