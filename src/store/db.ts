import { createKysely } from "@vercel/postgres-kysely";
import { GeneratedAlways } from "kysely";

export const db = createKysely<DatabaseSchema>();

type TransformGeneratedAlways<T> = {
  [K in keyof T]: T[K] extends GeneratedAlways<infer U>
    ? U
    : T[K] extends object
    ? TransformGeneratedAlways<T[K]>
    : T[K];
};

export interface DatabaseSchema {
  spots: {
    id: GeneratedAlways<string>;
    name: string;
    description: string | null;
    type: string | null;
    coordinates: string;
  };
  fish_species: {
    id: GeneratedAlways<string>;
    species: string;
    breed: string | null;
    name: string;
    description: string | null;
  };
  spearfishing_logs: {
    id: GeneratedAlways<string>;
    spot_id: number;
    time: string;
    date: string;
    conditions: number;
    breath_hold: number;
  };
  fish_seen: {
    log_id: number;
    fish_id: number;
  };
  fish_caught: {
    log_id: number;
    fish_id: number;
  };
}

export type TDatabaseSchema = TransformGeneratedAlways<DatabaseSchema>;
