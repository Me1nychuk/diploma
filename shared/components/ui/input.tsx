import * as React from "react";

import { cn } from "@/shared/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border-2 border-text bg-transparent  px-3 py-2 text-base max-sm:text-sm placeholder:opacity-75  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-600",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
