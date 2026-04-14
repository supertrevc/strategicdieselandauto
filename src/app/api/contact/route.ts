import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  vehicle: string;
  service: string;
  preferredDate?: string;
  notes?: string;
}

function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 1000);
}

function isValidPhone(phone: string): boolean {
  return /^[\d\s()+-]{7,20}$/.test(phone);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Server-side validation
    const errors: string[] = [];

    if (!body.name?.trim()) errors.push("Name is required.");
    if (!body.phone?.trim()) {
      errors.push("Phone is required.");
    } else if (!isValidPhone(body.phone)) {
      errors.push("Invalid phone number format.");
    }
    if (!body.vehicle?.trim()) errors.push("Vehicle is required.");
    if (!body.service?.trim()) errors.push("Service is required.");
    if (body.email && !isValidEmail(body.email)) {
      errors.push("Invalid email format.");
    }

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitize(body.name),
      phone: sanitize(body.phone),
      email: body.email ? sanitize(body.email) : "",
      vehicle: sanitize(body.vehicle),
      service: sanitize(body.service),
      preferredDate: body.preferredDate ? sanitize(body.preferredDate) : "",
      notes: body.notes ? sanitize(body.notes) : "",
      submittedAt: new Date().toISOString(),
    };

    // TODO: Connect to email service (Resend, Nodemailer, etc.)
    // Example with Resend:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@strategicdieselandauto.com',
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Appointment Request from ${sanitizedData.name}`,
    //   html: `...formatted email...`,
    // });

    // For now, log the submission
    console.log("Contact form submission:", sanitizedData);

    // TODO: Implement rate limiting
    // Consider using a simple in-memory store or Redis for production

    return NextResponse.json(
      { message: "Appointment request received successfully." },
      { status: 200 }
    );
  } catch {
    console.error("Contact form error");
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
