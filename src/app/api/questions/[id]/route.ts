import { db } from "@/lib/server/db";
import type { NextRequest } from "next/server";

export const GET = (request: NextRequest) => {
  const path = request.nextUrl.pathname;
  const questionId = path.split("/").pop();
  const question = db.questions.read(questionId);

  return new Response(JSON.stringify(question));
};
