/**
 * Email Service
 * Handle email notifications and contact form submissions
 */

import { ContactFormData } from '@/lib/types';

/**
 * Send contact form email
 * You can integrate with services like:
 * - SendGrid
 * - Mailgun
 * - Resend
 * - EmailJS
 * - etc.
 */
export class EmailService {
  /**
   * Send contact form email to admin
   */
  static async sendContactEmail(data: ContactFormData): Promise<boolean> {
    try {
      // Example using a custom API route
      const response = await fetch('/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
          subject: `New Contact Form Submission: ${data.subject}`,
          from: data.email,
          html: generateContactEmailHTML(data),
          replyTo: data.email,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error sending contact email:', error);
      return false;
    }
  }

  /**
   * Send confirmation email to user
   */
  static async sendConfirmationEmail(email: string, name: string): Promise<boolean> {
    try {
      const response = await fetch('/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'Thank you for your message!',
          html: generateConfirmationEmailHTML(name),
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      return false;
    }
  }
}

/**
 * Generate HTML for contact form email
 */
function generateContactEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #3b82f6; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin: 15px 0; }
        .label { font-weight: bold; color: #1f2937; }
        .value { color: #4b5563; margin-top: 5px; word-break: break-word; white-space: pre-wrap; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">From:</div>
            <div class="value">${escapeHTML(data.name)} &lt;${escapeHTML(data.email)}&gt;</div>
          </div>
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${escapeHTML(data.subject)}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${escapeHTML(data.message)}</div>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #9ca3af;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate HTML for confirmation email to user
 */
function generateConfirmationEmailHTML(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #3b82f6; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
        .button { display: inline-block; background-color: #3b82f6; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Thank you for reaching out!</h2>
        </div>
        <div class="content">
          <p>Hi ${escapeHTML(name)},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p>In the meantime, feel free to check out my latest projects and articles on my portfolio.</p>
          <p style="margin-top: 30px; margin-bottom: 30px;">
            <a href="https://yourportfolio.com" class="button">Visit My Portfolio</a>
          </p>
          <p>Best regards,<br>Your Name</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #9ca3af;">
            This is an automated response. Your original message has been safely delivered.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Escape HTML special characters
 */
function escapeHTML(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
