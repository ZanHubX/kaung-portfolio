import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
    process.env.RESEND_API_KEY
);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            subject,
            message,
        } = body;

        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {
            return NextResponse.json(
                {
                    error: "All fields are required.",
                },
                {
                    status: 400,
                }
            );
        }

        const { data, error } =
            await resend.emails.send({
                from: "Portfolio Contact <onboarding@resend.dev>",
                to: [
                    "kaungzanthaw27904@gmail.com",
                ],
                replyTo: email,
                subject: `Portfolio Contact: ${subject}`,
                html: `
          <div
            style="
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #222;
            "
          >
            <h2>New Portfolio Message</h2>

            <hr />

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Subject:</strong>
              ${subject}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <p>
              ${message.replace(/\n/g, "<br />")}
            </p>

            <hr />

            <p
              style="
                color: #777;
                font-size: 13px;
              "
            >
              Sent from Kaung Zan Thaw's
              portfolio website.
            </p>
          </div>
        `,
            });

        if (error) {
            console.error(
                "Resend error:",
                error
            );

            return NextResponse.json(
                {
                    error: "Failed to send email.",
                },
                {
                    status: 500,
                }
            );
        }

        return NextResponse.json({
            success: true,
            data,
        });

    } catch (error) {
        console.error(
            "Contact API error:",
            error
        );

        return NextResponse.json(
            {
                error: "Something went wrong.",
            },
            {
                status: 500,
            }
        );
    }
}