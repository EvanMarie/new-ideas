import { ActionFunctionArgs, json } from "@remix-run/node";
import ReCAPTCHA from "react-google-recaptcha";
import nodemailer from "nodemailer";
import { saveContact } from "~/utils/contacts.server";

const reCaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
const recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY;
const smtpUser = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const to = process.env.SMTP_USER;
const smptHost = process.env.SMTP_HOST as string;
const smptPort = parseInt(process.env.SMTP_PORT as string);

const mailConfig = nodemailer.createTransport({
  host: smptHost,
  port: smptPort,
  secure: true,
  auth: {
    user: smtpUser,
    pass,
  },
} as nodemailer.TransportOptions); // Specify the transport options type

const validateCaptcha = async (reCaptcha: string) => {
  console.log("validating captcha", { reCaptcha, reCaptchaSecret });
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${reCaptchaSecret}&response=${reCaptcha}`,
    }
  );
  return response.json();
};

export const contactAction = async ({ request }: ActionFunctionArgs) => {
  console.log("contact action");
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const reCaptcha = formData.get("reCaptcha");
  // verify reCaptcha useing theand send message using nodemailer
  const captchaResponse = await validateCaptcha(reCaptcha as string);
  console.log(captchaResponse);
  if (captchaResponse.success) {
    await mailConfig.sendMail({
      from: smtpUser as string,
      to,
      subject: `New message from ${name}, with email ${email}`,
      text: message as string,
    });
    await saveContact({
      name: name as string,
      email: email as string,
      message: message as string,
    });
    console.log("message sent");
    return json({ success: true });
  }
  return json({ success: false, error: "Captcha validation failed" });
};
