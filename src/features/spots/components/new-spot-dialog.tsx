"use client";

import { addSpot } from "@/actions/spots/add-spot";
import { Button } from "@/components/button";
import { Dialog } from "@/components/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { SpotFormData } from "../types/spot-schema";
import { SpotForm } from "./spot-form";
import { useState } from "react";

export const NewSpotDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const createSpot = async (formData: SpotFormData) => {
    try {
      await addSpot(formData);
      setIsDialogOpen(false);
      toast.success("Successfully added spot");
    } catch {
      toast.error("Failed to add spot");
    }
  };

  return (
    <Dialog
      title="Create New Spot"
      trigger={
        <Button variant={"outline"}>
          <PlusIcon />
          Add new spot
        </Button>
      }
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
    >
      <SpotForm formAction={createSpot} />
    </Dialog>
  );
};
