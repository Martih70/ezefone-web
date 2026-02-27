import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ezefone.co.uk";
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.redirect(siteUrl);
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return NextResponse.redirect(siteUrl);
    }
  } catch {
    return NextResponse.redirect(siteUrl);
  }

  const apkPath = join(process.cwd(), "private", "ezefone.apk");
  const fileBuffer = await readFile(apkPath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="ezefone.apk"',
      "Content-Length": fileBuffer.byteLength.toString(),
    },
  });
}
