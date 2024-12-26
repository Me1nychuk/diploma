import React from "react";

interface ResetFormProps {
  className?: string;
  token: string;
}

const ResetForm: React.FC<ResetFormProps> = ({ className, token }) => {
  return <div className={className}>{token}</div>;
};

export { ResetForm };
