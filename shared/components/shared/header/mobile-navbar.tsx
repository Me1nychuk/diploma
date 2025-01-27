"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import Link from "next/link";

interface MobileNavbarProps {
  className?: string;
  admin?: boolean;
}
export const MobileNavbar = ({ admin = false }: MobileNavbarProps) => {
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
                      <Link href="/about" onClick={handleClose}>
                        Про нас
                      </Link>
                    </li>
                    <li>
                      <Link href="/" onClick={handleClose}>
                        Склад кафедри
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Графік консультацій
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Лабораторії
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Наукова діяльність
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Контакти
                      </Link>
                    </li>
                    <li>
                      <Link href="/news" onClick={handleClose}>
                        Новини кафедри
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Навчальний процес</AccordionTrigger>
                <AccordionContent>
                  <ul className="nav-list">
                    <li>
                      <Link href="/" onClick={handleClose}>
                        Освітні програми
                      </Link>
                    </li>
                    <li>
                      <Link href="/" onClick={handleClose}>
                        Кваліфікаційні роботи
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Дисципліни вільного вибору
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Практики
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Анкетування
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Загальна інформація
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Наші досягнення
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Студентам</AccordionTrigger>
                <AccordionContent>
                  <ul className="nav-list">
                    <li>
                      <Link href="/chat" onClick={handleClose}>
                        Живий чат
                      </Link>
                    </li>
                    <li>
                      <Link href="/" onClick={handleClose}>
                        Неформальна освіта
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Скринька довіри
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Співпраця з роботодавцями
                      </Link>
                    </li>
                    <li>
                      <Link href="" onClick={handleClose}>
                        Корисні посилання
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              {admin && (
                <AccordionItem value="item-5">
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
