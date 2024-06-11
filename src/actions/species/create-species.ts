"use server";

import { SpeciesFormData } from "@/features/species/types/species-schema";
import { db } from "@/store/db";
import { revalidatePath } from "next/cache";

export const createSpecies = async (species: SpeciesFormData) => {
  try {
    await db.insertInto("fish_species").values(species).execute();
    revalidatePath("/species");
  } catch (e) {
    throw new Error(
      e instanceof Error ? e.message : "An error occurred adding spot"
    );
  }
};
