import Stripe from "stripe";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ezefone.co.uk";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID!,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${siteUrl}/download/?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/`,
    billing_address_collection: "auto",
  });

  return NextResponse.json({ url: session.url });
}
