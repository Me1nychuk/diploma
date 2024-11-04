import React from "react";

interface InputWithStateProps {
  className?: string;
}
export const InputWithState = ({ className }: InputWithStateProps) => {
  return (
    <>
      <div className={className}>InputWithState</div>
    </>
  );
};
