"use client";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useWindowSize } from "react-use";

import { MobileNavbar, Navbar } from "@/shared/components/shared";

import { ThemeSwitch } from "./theme-switch";
import { useAppSelector } from "@/shared/store/store";
import AuthLinks from "./auth-links ";
import UserLabel from "./user-label";

interface HeaderProps {
  className?: string;
  admin?: boolean;
  clear?: boolean;
}
export const Header = ({ className, admin, clear }: HeaderProps) => {
  const { currentUser} = useAppSelector((state) => state.user)
  const { width } = useWindowSize();
  const logoSize = width < 375 ? 40 : width < 768 ? 30 : 40;
  return (
    <>
      <header
        className={cn(
          " flex items-center justify-between text-2xl ",
          className
        )}
      >
        <Link
          href="/"
          className="relative active:translate-y-1 flex items-center gap-3   "
        >
          <Image
            className="rounded-full border-[1px] border-special"
            src="/logo.png"
            alt="logo"
            width={logoSize}
            height={logoSize}
          />
          {width >= 375 && (
            <div className="flex flex-col">
              <p className="text-xs max-md:text-[10px]">Department of</p>
              <p className="text-sm font-bold max-md:text-[12px]">
                Computer Engineering
              </p>
            </div>
          )}
        </Link>
        {!clear && width >= 768 && <Navbar admin={admin} />}

        <div className="flex items-center gap-3">
          {!clear &&
            (currentUser ? (
            <UserLabel user={currentUser}/>
            ) : (
              <AuthLinks orientation={ width < 768} />
            ))}
          <ThemeSwitch />
          {width < 768 && <MobileNavbar admin={admin} />}
        </div>
      </header>
    </>
  );
};
