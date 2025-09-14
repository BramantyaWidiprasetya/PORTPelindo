import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    incidents: [
      { id: "INC-001", status: "active" },
      { id: "INC-002", status: "mitigation" },
    ],
  });
}
