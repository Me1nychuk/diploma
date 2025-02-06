import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { Discussion } from "@/types";

interface DiscussionTableProps {
  discussions: Discussion[] | undefined;
  className?: string;
}

const DiscussionTable: React.FC<DiscussionTableProps> = ({ discussions }) => {
  return (
    <>
      {discussions ? (
        <Table className="max-w-full  max-h-80">
          <TableHeader>
            <TableRow>
              <TableHead className="text-left ">Тема</TableHead>
              <TableHead className="p-0">
                <span className="hidden min-xs:block">Коментарі</span>
                <span className="block min-xs:hidden">💬</span>
              </TableHead>
              <TableHead className="p-0">
                <span className="hidden min-xs:block">Дата</span>
                <span className="block min-xs:hidden">📅</span>
              </TableHead>
              <TableHead className="p-0">
                <span className="hidden min-xs:block">Одобрено</span>
                <span className="block min-xs:hidden">✅</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {discussions.map((el) => (
              <TableRow key={el.id}>
                <TableCell className="text-left line-clamp-2 pl-2">
                  <Link
                    className="hover:text-background hover:underline transition-all duration-100 "
                    href={"/discussins/" + el.id}
                  >
                    {el.title}
                  </Link>
                </TableCell>
                <TableCell className="p-[1px]  ">
                  {el.opinions.length || 0}
                </TableCell>
                <TableCell className="text-nowrap ">
                  {new Date(el.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell
                  className={cn(
                    "font-bold text-black",
                    el.isApproved ? "bg-green-300 " : "bg-red-300 "
                  )}
                >
                  {el.isApproved ? "Так" : "Ні"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className=" border-[1px] border-text rounded-xl w-full p-2 text-center">
          Немає дискусій
        </div>
      )}
    </>
  );
};

export { DiscussionTable };
