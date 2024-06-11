import { z } from "zod";

export const sessionSchema = z.object({
  spot_id: z.string().uuid(),
  time: z.string(),
  date: z.string(),
  conditions: z.preprocess((val) => Number(val), z.number().int().max(5)),
  breath_hold: z.preprocess((val) => Number(val), z.number().int().max(5)),
});

export type SessionFormData = z.infer<typeof sessionSchema>;
