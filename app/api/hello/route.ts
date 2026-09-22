import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "/api/hello에서 응답한 JSON입니다.",
    week: 4,
    date: "오늘 날짜",
    time: "현재 시간",
  });
}
