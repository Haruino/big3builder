import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core"

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  userId: integer("user_id"),
})
