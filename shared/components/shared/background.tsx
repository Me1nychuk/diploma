"use client";
import { useEffect, useState } from "react";

export const Background: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-screen z-0 flex items-center justify-center">
      <div className="gradient"></div>
    </div>
  );
};
