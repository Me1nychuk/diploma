import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu";
import Link from "next/link";

interface NavbarProps {
  className?: string;
  admin?: boolean;
}
export const Navbar = ({ admin = false }: NavbarProps) => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Кафедра</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-list">
                <li>
                  <Link href="/about">Про нас</Link>
                </li>

                <li>
                  <Link href="/">Склад кафедри</Link>
                </li>
                <li>
                  <Link href="">Графік консультацій</Link>
                </li>
                <li>
                  <Link href="">Лабораторії</Link>
                </li>
                <li>
                  <Link href="">Наукова діяльність</Link>
                </li>
                <li>
                  <Link href="">Контакти </Link>
                </li>
                <li>
                  <Link href="/news">Новини кафедри</Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Навчальний процес</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-list">
                <li>
                  <Link href="/">Освітні програми</Link>
                </li>
                <li>
                  <Link href="/">Кваліфікаційні роботи</Link>
                </li>
                <li>
                  <Link href="">Дисципліни вільного вибору</Link>
                </li>
                <li>
                  <Link href="">Практики</Link>
                </li>
                <li>
                  <Link href="">Анкетування</Link>
                </li>
                <li>
                  <Link href="">Загальна інформація</Link>
                </li>
                <li>
                  <Link href="">Наші досягнення</Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Студентам</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-list">
                <li>
                  <Link href="/chat">Живий чат</Link>
                </li>
                <li>
                  <Link href="/discussions">Дискусії</Link>
                </li>
                <li>
                  <Link href="/">Неформальна освіта</Link>
                </li>
                <li>
                  <Link href="">Скринька довіри</Link>
                </li>
                <li>
                  <Link href="">Співпраця з роботодавцями</Link>
                </li>
                <li>
                  <Link href="">Корисні посилання</Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {admin && (
            <NavigationMenuItem>
              <Link
                href="/admin"
                className="block text-[14px] px-2 py-1 hover:bg-background-transparent rounded-xl"
              >
                Admin
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
