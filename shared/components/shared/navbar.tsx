import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";

interface NavbarProps {
  className?: string;
  admin?: boolean;
}
export const Navbar = ({ className, admin = false }: NavbarProps) => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href="/"
              className="block text-[14px] px-2 py-1 hover:bg-background-transparent rounded-xl"
            >
              Головна
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Кафедра</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-list">
                <li>
                  <Link href="/about">Про нас</Link>
                </li>
                <li>
                  <Link href="/news">Новини кафедри</Link>
                </li>
                <li>
                  <Link href="https://nuwm.edu.ua/" target="blank">
                    Сайт університету
                  </Link>
                </li>
                <li>
                  <Link href="">Щось ще</Link>
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
                  <Link href="/policy">Політика</Link>
                </li>
                <li>
                  <Link href="">Пункт такий то</Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Розділ</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-list">
                <li>
                  <Link href="">Пункт такий то</Link>
                </li>
                <li>
                  <Link href="">Пункт такий то</Link>
                </li>
                <li>
                  <Link href="">Пункт такий то</Link>
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
