import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory store for rate limiting.
// NOTE: In a production environment with multiple server instances,
// a distributed store like Redis would be more appropriate.
const rateLimitStore: Record<string, { count: number; timestamp: number }> = {};
const RATE_LIMIT_COUNT = 5; // Max 5 requests
const RATE_LIMIT_WINDOW = 60 * 1000; // Per 1 minute

export async function POST(req: NextRequest) {
  const ip = req.ip ?? '127.0.0.1';

  // 1. Rate Limiting Logic
  const now = Date.now();
  const userEntry = rateLimitStore[ip];

  if (userEntry && now - userEntry.timestamp < RATE_LIMIT_WINDOW) {
    if (userEntry.count >= RATE_LIMIT_COUNT) {
      return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
    }
    rateLimitStore[ip].count++;
  } else {
    // Reset count for new window
    rateLimitStore[ip] = { count: 1, timestamp: now };
  }

  try {
    const body = await req.json();
    const { name, email, message, honeypot } = body;

    // 2. Honeypot check for spam
    if (honeypot) {
      // This is likely a bot. Silently pretend it was successful.
      return NextResponse.json({ message: 'Submission received!' }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields: name, email, and message.' }, { status: 400 });
    }

    // 3. Optional: SendGrid Email Forwarding
    const { SENDGRID_API_KEY, CONTACT_RECEIVER_EMAIL, SENDGRID_FROM } = process.env;

    if (SENDGRID_API_KEY && CONTACT_RECEIVER_EMAIL && SENDGRID_FROM) {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(SENDGRID_API_KEY);
      const msg = {
        to: CONTACT_RECEIVER_EMAIL,
        from: SENDGRID_FROM,
        subject: `New Contact Form Submission from ${name}`,
        text: `You have a new submission from:

        Name: ${name}
        Email: ${email}
        Message: ${message}`,
        html: `<p>You have a new submission from:</p>
               <ul>
                 <li><strong>Name:</strong> ${name}</li>
                 <li><strong>Email:</strong> ${email}</li>
               </ul>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, '<br>')}</p>`,
      };

      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error('SendGrid Error:', error);
        // Don't block the user response for a failed email.
        // In a real app, you might add this to a retry queue.
      }

    } else {
      // In a real application, you would store this submission in your CMS or database.
      // This will be implemented when the CMS is set up.
      console.log('SendGrid not configured. Logging submission instead:');
      console.log({ name, email, message });
    }

    return NextResponse.json({ message: 'Thank you for your message!' }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}
