"use client";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu";
interface HeaderProps {
  className?: string;
  admin?: boolean;
}
export const Header = ({ className }: HeaderProps) => {
  return (
    <>
      <header
        className={cn("flex items-center justify-between text-2xl", className)}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            className="rounded-full border-[1px] border-special"
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          NUWM
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Послуги</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="nav-list">
                  <li>
                    <Link href="/">Головна</Link>
                  </li>
                  <li>
                    <Link href="/news">Новини</Link>
                  </li>
                  <li>
                    <Link href="/chat">LIVE-чат</Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Про нас</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="nav-list">
                  <li>
                    <Link href="/news">Про нас</Link>
                  </li>
                  <li>
                    <Link href="/chat">Політика</Link>
                  </li>
                  <li>
                    <Link href="">Сайт університету</Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {true && (
              <NavigationMenuItem>
                <Link
                  href="/admin"
                  className="block text-[14px] px-2 py-1 hover:bg-background-transparent rounded-xl"
                >
                  Адмін панель
                </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <p>Вхід</p>
      </header>
    </>
  );
};
