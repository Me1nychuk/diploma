import React from "react";

export const Background: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 w-screen h-screen z-0  overflow-hidden flex items-center justify-center">
        <div className="gradient"></div>
      </div>
    </>
  );
};
