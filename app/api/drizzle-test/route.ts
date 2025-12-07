// // app/api/drizzle-test/route.ts
// import { NextResponse } from 'next/server'
// import { todos } from '@/lib/db/schema'
// import { db } from '@/lib/db/drizzle'

// export async function GET() {
//   try {
//     const rows = await db.select().from(todos).limit(10)

//     return NextResponse.json({
//       ok: true,
//       rows,
//     })
//   } catch (e) {
//     console.error(e)
//     return NextResponse.json(
//       {
//         ok: false,
//         error: (e as Error).message,
//       },
//       { status: 500 }
//     )
//   }
// }
