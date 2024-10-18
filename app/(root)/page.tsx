"use client";

import { Container } from "@/shared/components/shared";
import { ThemeSwitch } from "@/shared/components/shared/theme-switch";

import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("open");
    setOpen(true);
  };

  return (
    <Container>
      <p className="mt-50 text-4xl bg-secondary">Homepage</p>

      <div>
        {" "}
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={handleClickOpen}
        >
          {open ? "Close" : "Open"} Modal
        </button>
      </div>
      <div>
        {" "}
        <ThemeSwitch />
      </div>

      <Link href="/users/1">Users</Link>
    </Container>
  );
};

export default Home;
