"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { Skeleton } from "./skeleton";

interface LogoIconProps {
  size?: number;

  className?: string;
  fill?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({
  size = 24,

  className = "",
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Skeleton
        className={`w-[${size}] h-[${size}] rounded-full bg-background`}
      />
    );
  }
  return (
    <Image
      className={className}
      width={size}
      height={size}
      alt="logo"
      src={`/logo-${resolvedTheme}.png`}
    />
  );
};

export { LogoIcon };
