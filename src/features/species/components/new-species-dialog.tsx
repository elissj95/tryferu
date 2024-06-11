"use client";

import { Button } from "@/components/button";
import { Dialog } from "@/components/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";
import { SpeciesFormData } from "../types/species-schema";
import { SpeciesForm } from "./species-form";
import { createSpecies } from "@/actions/species/create-species";

export const NewSpeciesDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateSpecies = async (formData: SpeciesFormData) => {
    try {
      await createSpecies(formData);
      setIsDialogOpen(false);
      toast.success("Successfully added spot");
    } catch {
      toast.error("Failed to add spot");
    }
  };

  return (
    <Dialog
      title="Create New Species"
      trigger={
        <Button variant={"outline"}>
          <PlusIcon />
          Add new species
        </Button>
      }
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
    >
      <SpeciesForm formAction={handleCreateSpecies} />
    </Dialog>
  );
};
