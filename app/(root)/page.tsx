import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-background  grid  place-items-center">
        <p className="mt-50 text-4xl">Homepage</p>
        <Link href="/users/1">Users</Link>
      </div>
    </>
  );
};

export default Home;
