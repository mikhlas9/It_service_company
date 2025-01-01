import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Parse the form data from the request
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const course = formData.get('course');
    const experience = formData.get('experience');
    const message = formData.get('message');

    // Create a transporter using SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // True for port 465, false otherwise
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send an email with the transporter
    await transporter.sendMail({
      from: `"Binary Bastions Course Enrollment Form" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `Course Enrollment: ${course}`,
      text: `You have a new course enrollment submission:\n\n
Name: ${name}\n
Email: ${email}\n
Phone: ${phone}\n
Course: ${course}\n
Experience Level: ${experience}\n\n
Message:\n${message}`,
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
                <h2>New Course Enrollment</h2>
              </div>
              <div class="content">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Course:</strong> ${course}</p>
                <p><strong>Experience Level:</strong> ${experience}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div class="footer">
                <p>This email was sent from the Course Enrollment form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Return success response
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error processing course enrollment:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
