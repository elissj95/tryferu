import { z } from "zod";

export const speciesSchema = z.object({
  species: z.string().min(1, "Species (Latin name) is required"),
  commonName: z.string().min(1, "Common name is required"),
  family: z.string().optional(),
  description: z.string().optional(),
  habitat: z.string().optional(),
});

export type SpeciesFormData = z.infer<typeof speciesSchema>;
