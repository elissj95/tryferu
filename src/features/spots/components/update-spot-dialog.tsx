"use client";

import { updateSpot } from "@/actions/spots/update-spot";
import { Button } from "@/components/button";
import { Dialog } from "@/components/dialog";
import { TDatabaseSchema } from "@/store/db";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { SpotFormData } from "../types/spot-schema";
import { SpotForm } from "./spot-form";
import { useState } from "react";

export const UpdateSpotDialog = ({
  id,
  defaultSpot,
}: {
  id: string;
  defaultSpot: TDatabaseSchema["spots"];
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const createSpot = async (formData: SpotFormData) => {
    try {
      await updateSpot(id, formData);
      setIsDialogOpen(false);
      toast.success("Successfully updated spot");
    } catch {
      toast.error("Failed to update spot");
    }
  };

  return (
    <Dialog
      title="Update Spot"
      trigger={
        <Button variant="icon">
          <Pencil1Icon />
        </Button>
      }
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
    >
      <SpotForm formAction={createSpot} defaultSpot={defaultSpot} isUpdate />
    </Dialog>
  );
};
