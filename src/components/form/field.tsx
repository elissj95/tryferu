import { ReactNode } from "react";

export const Field = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};
