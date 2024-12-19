import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";

interface DiscussionTableProps {
  discussions: any[];
  className?: string;
}

const DiscussionTable: React.FC<DiscussionTableProps> = ({ discussions }) => {
  return (
    <Table className="max-w-full ">
      <TableHeader>
        <TableRow>
          <TableHead className="text-left">Тема</TableHead>
          <TableHead>Коментарі</TableHead>
          <TableHead>Дата</TableHead>
          <TableHead>Одобрено</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {discussions.map((el) => (
          <TableRow key={el.id}>
            <Link
              className="hover:text-white transition-all duration-100"
              href={"/discussins/" + el.id}
            >
              <TableCell className="text-left line-clamp-2 ">
                {el.title}
              </TableCell>
            </Link>
            <TableCell className="p-[1px]  ">
              {el.opinions.length || 0}
            </TableCell>
            <TableCell className="text-nowrap ">{el.createdAt}</TableCell>
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
  );
};

export { DiscussionTable };
