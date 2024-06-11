"use client";

import { createSession } from "@/actions/sessions/create-session";
import { Button } from "@/components/button";
import { Dialog } from "@/components/dialog";
import { TDatabaseSchema } from "@/store/db";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";
import { SessionFormData } from "../types/session-schema";
import { SessionForm } from "./session-form";

export const NewSessionDialog = ({
  spots,
}: {
  spots?: TDatabaseSchema["spots"][];
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateSession = async (formData: SessionFormData) => {
    try {
      await createSession(formData);
      setIsDialogOpen(false);
      toast.success("Successfully added spot");
    } catch {
      toast.error("Failed to add spot");
    }
  };

  return (
    <Dialog
      title="Create New Session"
      trigger={
        <Button variant={"outline"}>
          <PlusIcon />
          Add new session
        </Button>
      }
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
    >
      <SessionForm formAction={handleCreateSession} spots={spots} />
    </Dialog>
  );
};
