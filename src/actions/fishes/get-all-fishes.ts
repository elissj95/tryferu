"use server";

import { db } from "@/store/db";

export const getAllFishes = async () => {
  try {
    return await db.selectFrom("fish_species").selectAll().execute();
  } catch (error) {
    console.error(error);
  }
};
