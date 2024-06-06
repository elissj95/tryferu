"use client";

import { databaseDown } from "@/actions/store/migrate";
import { Button } from "@/components/button";
import { toast } from "sonner";

export const DbDownButton = () => {
  const dbDown = async () => {
    try {
      await databaseDown();
      toast.success("Database down successful");
    } catch {
      toast.error("Database down failed");
    }
  };

  return (
    <Button onClick={dbDown} variant="solid">
      db down
    </Button>
  );
};
