import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const internshipArea = formData.get('internshipArea');
    const message = formData.get('message');

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Binary Bastions Internship Form" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `Internship Application: ${internshipArea}`,
      text: `You have a new Internship form submission:\n\n
Name: ${name}\n
Email: ${email}\n
Phone: ${phone}\n
Internship Area: ${internshipArea}\n\n
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
        <h2>New Internship Form</h2>
      </div>
      <div class="content">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Phone No.:</strong> ${phone}</p>
        <p><strong>Internship Area:</strong> ${internshipArea}</p>
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

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error processing internship application:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
