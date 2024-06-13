"use client";

import Link from "next/link";
import { Button, ButtonProps } from "./button";
import { ReactNode, useState } from "react";
import { SunIcon } from "@radix-ui/react-icons";

export const LinkButton = ({
  href,
  children,
  variant = "outline",
  className,
}: {
  href: string;
  variant?: ButtonProps["variant"];
  children: ReactNode;
  className?: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link href={href} onClick={() => setIsLoading(true)}>
      <Button variant={variant} className={className}>
        {children}
        {isLoading && <SunIcon className="animate-spin" />}
      </Button>
    </Link>
  );
};
