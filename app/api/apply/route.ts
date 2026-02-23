import { NextRequest, NextResponse } from "next/server";

interface ApplicationPayload {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  title: string;
  yearsAsEA: string;
  biggestChallenge: string;
  fundingType: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ApplicationPayload = await request.json();

    const {
      firstName,
      lastName,
      email,
      company,
      title,
      yearsAsEA,
      biggestChallenge,
      fundingType,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !title) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log application (replace with Supabase / CRM / Stripe integration)
    console.log("New application received:", {
      timestamp: new Date().toISOString(),
      firstName,
      lastName,
      email,
      company,
      title,
      yearsAsEA,
      biggestChallenge,
      fundingType,
    });

    // TODO: Integrate with Supabase
    // const { data, error } = await supabase.from('applications').insert([{ ... }])

    // TODO: Integrate with CRM (e.g. HubSpot, Notion, Airtable)

    // TODO: Trigger confirmation email via Resend / SendGrid

    return NextResponse.json(
      { success: true, message: "Application received successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
