"use server";

import { db } from "@/store/db";

export const getAllSpecies = async () => {
  try {
    return await db.selectFrom("fish_species").selectAll().execute();
  } catch (error) {
    console.error(error);
  }
};
