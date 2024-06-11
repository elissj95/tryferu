import { cva } from "cva";
import { ReactNode } from "react";

const contentStyles = cva(["p-4", "bg-black50", "flex-grow", "w-full"]);

export const Content = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={contentStyles({ className })}>
      <div className="flex flex-col gap-4 max-w-[1080px] mx-auto pt-4">
        {children}
      </div>
    </div>
  );
};
