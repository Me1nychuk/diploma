"use client";
import React, { ReactElement, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";

interface PopupConfirmProps {
  className?: string;
  classNameYes?: string;
  classNameNo?: string;
  onClick: () => void;
  children?: ReactElement;
}

const PopupConfirm: React.FC<PopupConfirmProps> = ({
  className,
  classNameYes,
  classNameNo,
  onClick,
  children,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={cn("border-none rounded-xl", className)}>
        <DialogHeader>
          <DialogTitle>Ви впевнені що хочете виконати цю операцію?</DialogTitle>
          <DialogDescription>
            Цю операцію неможливо буде скасувати, вона буде виконана негайно.
          </DialogDescription>
          <div className="flex justify-around">
            <Button
              className={cn(
                "rounded-xl bg-red-600 text-lg text-white border-2 hover:bg-white hover:text-red-600 hover:border-red-600 transition-all duration-200 ",
                classNameYes
              )}
              onClick={() => {
                onClick();
                setOpen(false);
              }}
            >
              Так
            </Button>
            <Button
              className={cn(
                "rounded-xl bg-green-600 text-lg text-white border-2 hover:bg-white hover:text-green-600 hover:border-green-600 transition-all duration-200",
                classNameNo
              )}
              onClick={() => setOpen(false)}
            >
              Ні
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { PopupConfirm };
