import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Parse the JSON body from the request
    const { name, email, subject, message } = await req.json();

    // Create a transporter using SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email with the transporter
    await transporter.sendMail({
      from: `"Binary Bastions Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `${subject}`,
      text: `You have a new contact form submission:

Name: ${name}
From: ${email}
Subject: ${subject}

Message:
${message}`,
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                color: #333;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 30px auto;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 20px;
              }
              .header {
                background-color: #3B82F6;
                color: white;
                text-align: center;
                padding: 10px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                padding: 20px;
                line-height: 1.6;
              }
              .content p {
                margin: 10px 0;
              }
              .content strong {
                color: #3B82F6;
              }
              .footer {
                font-size: 12px;
                color: #888;
                text-align: center;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Message Form Binary Bastions</h2>
              </div>
              <div class="content">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>From:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div class="footer">
                <p>This email was sent from the Binary Bastions contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Return a success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
