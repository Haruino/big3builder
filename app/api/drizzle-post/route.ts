import { db } from "@/lib/db/drizzle"
import { todos } from "@/lib/db/schema"
import { NextRequest, NextResponse } from "next/server"
const testRow = {
  title: "matchan",
  userId: 54321,
}

export async function POST() {
  try {
    const inserted = await db.insert(todos).values(testRow)
    return NextResponse.json({
      ok: true,
      rows: inserted,
    })
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      {
        ok: false,
        error: (e as Error).message,
      },
      { status: 500 }
    )
  }
}
