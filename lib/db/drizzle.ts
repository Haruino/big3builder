import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

const client = postgres(process.env.DATABASE_URL!, {
  ssl: "require", // Supabaseは基本SSL必須
})

export const db = drizzle(client)
