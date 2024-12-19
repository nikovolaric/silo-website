import { createTransport, TransportOptions } from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";

const transporterOptions = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
} as TransportOptions;

export async function sendEnquiry(options: {
  name: string;
  mail: string;
  phone: string;
  message: string;
}) {
  //1. Create transporter
  const transporter = createTransport(transporterOptions);

  //2. Define the email options
  const mailOptions = {
    from: "silojelicic@lamastrategies.com",
    to: process.env.RECEIVER_MAIL,
    subject: "Povpraševanje",
    html: `<div style='font-family:Verdana'>Ime in priimek:${
      options.name
    }<br/>Mail:${options.mail}<br/>Telefonska:${
      options.phone
    }<br/><br/>${options.message.replaceAll("\r\n", "<br/>")}`,
  };

  //3. Actually send the email
  const res = await transporter.sendMail(mailOptions);

  return res.response;
}

export async function sendComplaint(options: {
  subject: string;
  message: string;
}) {
  //1. Create transporter
  const transporter = createTransport(transporterOptions);

  //2. Define the email options
  const mailOptions = {
    from: "silojelicic@lamastrategies.com",
    to: process.env.RECEIVER_MAIL,
    subject: options.subject,
    html: `${options.message.replaceAll("\r\n", "<br/>")}`,
  };

  //3. Actually send the email
  const res = await transporter.sendMail(mailOptions);

  return res.response;
}

export async function sendApplication(options: {
  name: string;
  mail: string;
  phone: string;
  message: string;
  position: string;
  file: Attachment[];
}) {
  //1. Create transporter
  const transporter = createTransport(transporterOptions);

  //2. Define the email options
  const mailOptions = {
    from: "silojelicic@lamastrategies.com",
    to: process.env.RECEIVER_MAIL,
    subject: `Prijava na delovno mesto ${options.position}`,
    html: `<div style='font-family:Verdana'>Ime in priimek:${
      options.name
    }<br/>Mail:${options.mail}<br/>Telefonska:${
      options.phone
    }<br/><br/>${options.message.replaceAll("\r\n", "<br/>")}`,
    attachments: options.file,
  };

  //3. Actually send the email
  const res = await transporter.sendMail(mailOptions);

  return res.response;
}
