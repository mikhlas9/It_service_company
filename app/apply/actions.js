'use server';

import axios from 'axios';

const PHONE_NUMBER_ID = process.env.WHATSAPP_API_KEY;
const WHATSAPP_API_URL = `https://graph.facebook.com/v17.0/${PHONE_NUMBER_ID}/messages`;
const RECIPIENT_PHONE_NUMBER = '919906610175';

export async function submitApplication(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const internshipArea = formData.get('internshipArea');
  const message = formData.get('message');

  // Preparing the form data to send both in email and WhatsApp
  const formState = {
    name: name,
    email: email + phone,  // Combining email and phone for email content
    subject: internshipArea,
    message: message
  };

  try {
    // Sending the form data via email (using your API)
    const emailResponse = await fetch('https://binarybastions.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });

    if (!emailResponse.ok) {
      console.error('Error sending email:', await emailResponse.json());
      return { success: false };
    }

    // Sending the information to WhatsApp using the WhatsApp API
    console.log('Sending template message to WhatsApp...');
    
    const whatsappResponse = await axios.post(
      WHATSAPP_API_URL,
      {
        messaging_product: 'whatsapp',
        to: RECIPIENT_PHONE_NUMBER,
        type: 'template',
        template: {
          name: 'binary_bastion_internship',
          language: {
            code: 'en'
          },
          components: [
            {
              type: 'body',
              parameters: [
                { type: 'text', text: name },
                { type: 'text', text: email },
                { type: 'text', text: phone },
                { type: 'text', text: internshipArea },
                { type: 'text', text: message }
              ]
            }
          ]
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('WhatsApp API Response:', whatsappResponse.data);

    // Return success if both API calls are successful
    if (whatsappResponse.status === 200) {
      return { success: true };
    } else {
      console.error('Error sending WhatsApp message:', whatsappResponse.data);
      return { success: false };
    }
  } catch (error) {
    console.error('Error during form submission:', error);
    return { success: false };
  }
}
