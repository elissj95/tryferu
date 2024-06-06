import { z } from "zod";

export const spotSchema = z.object({
  name: z.string().min(1, "Name is required"),
  coordinates: z.string().min(1, "Location is required"),
  description: z.string().nullable(),
  type: z.string().nullable(),
});

export type SpotFormData = z.infer<typeof spotSchema>;
