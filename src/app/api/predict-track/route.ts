import { NextResponse } from "next/server";

// Simple stub for prototype: returns predictable mock data
export async function GET() {
  return NextResponse.json({
    ok: true,
    items: [
      { id: "EX-001", status: "in_transit", etaDays: 3 },
      { id: "EX-002", status: "at_port", etaDays: 1 },
    ],
  });
}
