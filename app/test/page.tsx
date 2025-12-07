// "use client"

// import { useEffect, useState } from "react"
// import { supabase } from "@/lib/supabase/client"

// type Result = {
//   data: any[] | null
//   error: any | null
// }

// export default function TestPage() {
//   const [result, setResult] = useState<Result | null>(null)

//   const fetchData = async () => {
//     const { data, error } = await supabase.from("todos").select("*")
//     setResult({ data: data ?? null, error })
//   }

//   const insertTestRow = async () => {
//     const { error } = await supabase.from("todos").insert({ title: "inserted from Next.js" })

//     if (error) {
//       alert("Insert error: " + error.message)
//       return
//     }

//     // 追加後に再取得
//     await fetchData()
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-xl font-bold">Supabase Test</h1>

//       <button onClick={insertTestRow} className="border px-3 py-1 rounded">
//         Insert test row
//       </button>

//       <pre className="text-sm bg-gray-100 p-2 rounded">{JSON.stringify(result, null, 2)}</pre>
//     </div>
//   )
// }
