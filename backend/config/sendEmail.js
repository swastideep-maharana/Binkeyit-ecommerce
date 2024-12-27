import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.RESEND_API) {
  console.error("Provide RESEND_API in the .env file");
  process.exit(1);
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({ sendTo, subject, html }) => {
  try {
    const data = await resend.emails.send({
      from: "Nextmart <onboarding@resend.dev>",
      to: sendTo,
      subject: subject,
      html: html,
    });

    return data;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error; // Rethrow the error for further handling if necessary
  }
};

export default sendEmail;
