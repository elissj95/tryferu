import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("spots")
    .addColumn("id", "uuid", (column) =>
      column.primaryKey().defaultTo(sql`gen_random_uuid()`)
    )
    .addColumn("name", "text", (column) => column.notNull())
    .addColumn("description", "text")
    .addColumn("type", "text")
    .addColumn("coordinates", "text", (column) => column.notNull())
    .execute();

  await db.schema
    .createTable("fish_species")
    .addColumn("id", "uuid", (column) =>
      column.primaryKey().defaultTo(sql`gen_random_uuid()`)
    )
    .addColumn("species", "text", (column) => column.notNull())
    .addColumn("breed", "text")
    .addColumn("name", "text", (column) => column.notNull())
    .addColumn("description", "text")
    .execute();

  await db.schema
    .createTable("spearfishing_logs")
    .addColumn("id", "uuid", (column) =>
      column.primaryKey().defaultTo(sql`gen_random_uuid()`)
    )
    .addColumn("spot_id", "uuid", (column) =>
      column.references("spots.id").notNull()
    )
    .addColumn("time", "text", (column) => column.notNull())
    .addColumn("date", "text", (column) => column.notNull())
    .addColumn("conditions", "integer", (column) => column.notNull())
    .addColumn("breath_hold", "integer", (column) => column.notNull())
    .execute();

  await db.schema
    .createTable("fish_seen")
    .addColumn("log_id", "uuid", (column) =>
      column.references("spearfishing_logs.id").notNull()
    )
    .addColumn("fish_id", "uuid", (column) =>
      column.references("fish_species.id").notNull()
    )
    .execute();

  await db.schema
    .createTable("fish_caught")
    .addColumn("log_id", "uuid", (column) =>
      column.references("spearfishing_logs.id").notNull()
    )
    .addColumn("fish_id", "uuid", (column) =>
      column.references("fish_species.id").notNull()
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("fish_caught").ifExists().execute();
  await db.schema.dropTable("fish_seen").ifExists().execute();
  await db.schema.dropTable("fish_species").ifExists().execute();
  await db.schema.dropTable("spearfishing_logs").ifExists().execute();
  await db.schema.dropTable("spots").ifExists().execute();
}
