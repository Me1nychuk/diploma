import React from "react";

const UserPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <>
      <div className="bg-background  grid  place-items-center">
        <p className="mt-50 text-4xl">UserPage id: {id}</p>
      </div>
    </>
  );
};

export default UserPage;
