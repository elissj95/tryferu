"use client";

import { databaseUp } from "@/actions/store/migrate";
import { Button } from "@/components/button";
import { toast } from "sonner";

export const DbUpButton = () => {
  const dbDown = async () => {
    try {
      await databaseUp();
      toast.success("Database up successful");
    } catch {
      toast.error("Database up failed");
    }
  };

  return (
    <Button onClick={dbDown} variant="solid">
      db up
    </Button>
  );
};
