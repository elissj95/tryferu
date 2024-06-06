import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  if (!children) return null;
  return (
    <div className="text-red-500 text-sm flex gap-2 items-center">
      <ExclamationTriangleIcon />
      {children}
    </div>
  );
};
