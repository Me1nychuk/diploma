"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";

interface MobileNavbarProps {
  className?: string;
  admin?: boolean;
}
export const MobileNavbar = ({
  className,
  admin = false,
}: MobileNavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <SheetTrigger asChild>
          <Menu
            color="currentColor"
            className="block active:opacity-60, hover:opacity-60 cursor-pointer"
            size={28}
          />
        </SheetTrigger>
        <SheetContent className="bg-background max-w-[375px] border-none ">
          <SheetHeader>
            <SheetTitle className="font-bold">Навігація</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <Link
                  href="/"
                  className="w-full block text-base py-4"
                  onClick={handleClose}
                >
                  Головна
                </Link>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Кафедра</AccordionTrigger>
                <AccordionContent>
                  <ul className="nav-list">
                    <li>
                      <Link href="/chat" onClick={handleClose}>
                        Живий чат
                      </Link>
                    </li>
                    <li>
                      <Link href="/policy" onClick={handleClose}>
                        Політика
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Пункт такий то
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Студентам</AccordionTrigger>
                <AccordionContent>
                  <ul className="nav-list">
                    <li>
                      <Link href="/chat" onClick={handleClose}>
                        Живий чат
                      </Link>
                    </li>
                    <li>
                      <Link href="/policy" onClick={handleClose}>
                        Політика
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Пункт такий то
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Розділ</AccordionTrigger>
                <AccordionContent>
                  <ul className="nav-list">
                    <li>
                      <Link href="" onClick={handleClose}>
                        Пункт такий то
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Пункт такий то
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Пункт такий то
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              {admin && (
                <AccordionItem value="item-1">
                  <Link
                    href="/admin"
                    className="w-full block text-base py-4"
                    onClick={handleClose}
                  >
                    Admin
                  </Link>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
