// app/api/book-demo/route.ts
import { NextResponse } from "next/server";

const successMessage = "Successfully subscribed to our mailing list.";

export async function POST(req: Request) {
  try {
    const {
      email,
      firstName,
      lastName,
      companyName = "",
      jobTitle = "",
      phone = null,
      message = null,
    } = await req.json();

    /* 1️⃣  Validate required fields */
    if (!email || !firstName || !lastName) {
      return NextResponse.json(
        { error: "Email, first name, and last name are required" },
        { status: 400 }
      );
    }

    // 2️⃣  Forward submission to Jotform to keep their backend in sync
    try {
      const jotformBody = new URLSearchParams();

      // Core identifiers/metadata
      jotformBody.append("formID", "260326158706053");
      // Spam protection token Jotform's script normally sets (simple_spc)
      // See form source: simple_spc value becomes "260326158706053-260326158706053"
      jotformBody.append("simple_spc", "260326158706053-260326158706053");

      // Simulate a real submit button click
      jotformBody.append("submit", "Submit");
      jotformBody.append("input_2", "Submit");

      // Map our fields to Jotform's field names (from Jotform source code)
      // Name
      jotformBody.append("q3_yourName[first]", firstName);
      jotformBody.append("q3_yourName[last]", lastName);

      // Work email
      jotformBody.append("q4_yourWork", email);

      // Company name (required on Jotform)
      jotformBody.append("q7_companyName", companyName);

      // Job Title (optional)
      if (jobTitle) {
        jotformBody.append("q8_jobTitle", jobTitle);
      }

      // Phone (optional)
      if (phone) {
        jotformBody.append("q5_phoneNumber[full]", phone);
      }

      // Message (optional)
      if (message) {
        jotformBody.append("q10_message10", message);
      }

      // Hidden honeypot field
      jotformBody.append("website", "");

      await fetch(
        "https://submit.jotform.com/submit/260326158706053",
        {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: jotformBody.toString(),
        }
      );
    } catch (err) {
      // Don't block our own flow if Jotform is down or unreachable
      console.error("Failed to forward submission to Jotform:", err);
    }

    return NextResponse.json(
      { status: "success", message: successMessage },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("book-demo route error:", err);
    return NextResponse.json(
      { error: err.message ?? "Internal server error" },
      { status: 500 }
    );
  }
}
