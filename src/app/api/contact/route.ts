import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure Transporter (Gmail Example)
        // NOTE: User must enable "App Passwords" in Google Account
        const pass = process.env.EMAIL_PASS;
        const user = process.env.EMAIL_USER || 'shamilputhusheri@gmail.com';

        // DEBUG LOGGING (Check your terminal)
        console.log("Attempting to send email...");
        console.log("User configured:", !!user);
        console.log("Password configured:", !!pass);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: pass, // Ensure no spaces if copy-pasted with them, though Gmail usually handles it
            },
        });

        // Email Options
        const mailOptions = {
            from: user, // Sender address
            to: 'shamilputhusheri@gmail.com', // Receiver address
            replyTo: email,
            subject: `New Enquiry: ${subject} from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Project Type: ${subject}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Enquiry from Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Email Send Error Details:', error); // detailed logging
        return NextResponse.json(
            { error: 'Failed to send email. Check server logs.' },
            { status: 500 }
        );
    }
}
