import { NextResponse } from "next/server";

export async function GET() {
  const healthData = {
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process?.uptime() || 0,
    environment: process?.env?.NODE_ENV || "development",
    version: process?.env?.npm_package_version || "1.0.0",
  };

  return NextResponse.json(healthData, { status: 200 });
}
