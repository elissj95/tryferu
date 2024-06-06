import { ReactNode } from "react";

export const Card = ({
  title,
  buttons,
  children,
}: {
  title: string;
  buttons?: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="p-4 shadow-sm border-solid rounded-md border border-black200 w-full flex flex-col gap-4">
      <p className="subheader ">{title}</p>
      <div className="">{children}</div>
      <div className="justify-end w-full flex">{buttons}</div>
    </div>
  );
};
