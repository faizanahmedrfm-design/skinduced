import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const requiredFields = ["name", "phone", "email", "date", "time"];
  const missingFields = requiredFields.filter((field) => !body?.[field]);

  if (missingFields.length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please complete all required fields.", missingFields },
      { status: 400 }
    );
  }

  // Connect this point to a CRM, Google Sheet, email service, or booking platform.
  return NextResponse.json({
    ok: true,
    message: "Consultation request received.",
    receivedAt: new Date().toISOString()
  });
}
