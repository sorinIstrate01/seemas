// app/api/book-demo/route.ts
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getPool, Tables } from "@/lib/db";

const successMessage = "Thank you for subscribing to our mailing list!";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    /* 1️⃣  Validate required fields */
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const pool = await getPool(Tables.mailing_list);
    await pool.query(
      `INSERT INTO ${Tables.mailing_list}
         (id, email)
       VALUES ($1, $2)`,
      [randomUUID(), email]
    );

    return NextResponse.json(
      { status: "success", message: successMessage },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("subscribe route error:", err);
    return NextResponse.json(
      { error: err.message ?? "Internal server error" },
      { status: 500 }
    );
  }
}
