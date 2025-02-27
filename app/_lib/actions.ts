"use server";

import { redirect } from "next/navigation";
import { sendApplication, sendComplaint, sendEnquiry } from "../_config/mail";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { Attachment } from "nodemailer/lib/mailer";
import User from "../_models/userModel";
import { jwtDecode } from "jwt-decode";
import connectDB from "../_config/database";

/*-----------------------------------------------------------maili--------------------------------------------------------------------*/
export async function SendMail(formData: FormData) {
  const data: { name: string; mail: string; phone: string; message: string } = {
    name: formData.get("name") as string,
    mail: formData.get("mail") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
  };

  if (formData.has("honeypot")) return "error";

  const result = await sendEnquiry(data);

  return result;
}

export async function newComplaint(formData: FormData) {
  const data: { subject: string; message: string } = {
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  if (formData.has("honeypot")) return "error";

  const result = await sendComplaint(data);

  return result;
}

export async function newApplication(formData: FormData) {
  const CV = formData.get("CV") as File;

  const bufferFile = await CV.arrayBuffer();
  const fileBase64 = Buffer.from(bufferFile).toString("base64");

  const filePath = `data:${CV.type};base64,${fileBase64}`;

  const data: {
    name: string;
    mail: string;
    phone: string;
    position: string;
    message: string;
    file: Attachment[];
  } = {
    name: formData.get("name") as string,
    mail: formData.get("mail") as string,
    phone: formData.get("phone") as string,
    position: formData.get("position") as string,
    message: formData.get("message") as string,
    file: [{ filename: CV.name, path: filePath }],
  };

  if (!formData.has("agree")) return "error";

  if (formData.has("honeypot")) return "error";

  const result = await sendApplication(data);

  return result;
}

/*-------------------------------------------------------------downloadi----------------------------------------------------------------*/

export async function deleteAsset(public_id: string) {
  await connectDB();
  const cookieStore = await cookies();
  const session = cookieStore.get("jwt")?.value as string;
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    cookieStore.delete("jwt");
    redirect("/login");
  }

  const auth = "Bearer " + session;

  await fetch(`${process.env.API_URL}/api/pdf`, {
    method: "POST",
    headers: {
      authorization: auth,
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: public_id }),
  });
}

export async function createDownload(formData: FormData) {
  await connectDB();
  const cookieStore = await cookies();
  const session = cookieStore.get("jwt")?.value as string;
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    cookieStore.delete("jwt");
    redirect("/login");
  }

  const auth = "Bearer " + session;

  const data = Object.fromEntries(formData);

  await fetch(`${process.env.API_URL}/api/downloads`, {
    method: "POST",
    headers: {
      authorization: auth,
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  revalidatePath("/dashboard/downloads");
  revalidatePath("/rs/onama");
  revalidatePath("/si/onas");
  revalidatePath("/aboutus");
  revalidatePath("/rs/usluge");
  revalidatePath("/si/storitve");
  revalidatePath("/services");
  revalidatePath("/sustainability");
  revalidatePath("/rs/odrzivost");
  revalidatePath("/si/trajnost");

  redirect("/dashboard/downloads");
}

export async function editDownload(formData: FormData, id: string) {
  await connectDB();
  const cookieStore = await cookies();
  const session = cookieStore.get("jwt")?.value as string;
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    cookieStore.delete("jwt");
    redirect("/login");
  }

  const auth = "Bearer " + session;

  const data = Object.fromEntries(formData);

  await fetch(`${process.env.API_URL}/api/downloads/${id}`, {
    method: "PATCH",
    headers: {
      authorization: auth,
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  revalidatePath("/dashboard/downloads");
  revalidatePath(`/dashboard/downloads/${id}`);
  revalidatePath("/rs/onama");
  revalidatePath("/si/onas");
  revalidatePath("/aboutus");
  revalidatePath("/rs/usluge");
  revalidatePath("/si/storitve");
  revalidatePath("/services");
  revalidatePath("/sustainability");
  revalidatePath("/rs/odrzivost");
  revalidatePath("/si/trajnost");

  redirect("/dashboard/downloads");
}

export async function deleteDownload(formData: FormData, id: string) {
  await connectDB();
  const cookieStore = await cookies();
  const session = cookieStore.get("jwt")?.value as string;
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    cookieStore.delete("jwt");
    redirect("/login");
  }

  const auth = "Bearer " + session;

  await fetch(`${process.env.API_URL}/api/downloads/${id}`, {
    method: "DELETE",
    headers: {
      authorization: auth,
    },
  });

  revalidatePath("/dashboard/downloads");
  revalidatePath("/rs/onama");
  revalidatePath("/si/onas");
  revalidatePath("/aboutus");
  revalidatePath("/rs/usluge");
  revalidatePath("/si/storitve");
  revalidatePath("/services");
  revalidatePath("/sustainability");
  revalidatePath("/rs/odrzivost");
  revalidatePath("/si/trajnost");

  redirect("/dashboard/downloads");
}

/*--------------------------------------------------------------auth------------------------------------------------------------------------------*/

export async function login(formData: FormData) {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    if (!username || !password)
      throw new Error("Please provide username and password!");

    const user = { username, password };

    const res = await fetch(`${process.env.API_URL}/api/users/login`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      const error = await res.json();
      throw error;
    }
    const loggedInUser = await res.json();

    const { token } = loggedInUser;

    const cookieStore = await cookies();

    cookieStore.set("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    });

    return loggedInUser;
  } catch (err) {
    return err;
  } finally {
    redirect("/dashboard");
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("jwt");

  redirect("/");
}

/*---------------------------------------------------------------cookies------------------------------------------------------------------------ */
export async function acceptAllCookies() {
  const cookieStore = await cookies();
  cookieStore.set("analyticsConsent", "true", {
    secure: true,
    sameSite: "lax",
    httpOnly: true,
    expires: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000),
  });

  cookieStore.set("thirdPartyConsent", "true", {
    secure: true,
    sameSite: "lax",
    httpOnly: true,
    expires: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000),
  });

  revalidatePath("/");
}

export async function declineAllCookies() {
  const cookieStore = await cookies();

  cookieStore.set("analyticsConsent", "false", {
    secure: true,
    sameSite: "lax",
    httpOnly: true,
    expires: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000),
  });

  cookieStore.set("thirdPartyConsent", "false", {
    secure: true,
    sameSite: "lax",
    httpOnly: true,
    expires: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000),
  });

  cookieStore.set("_ga", "", {
    expires: new Date(Date.now() + 1000),
    domain: ".silo-jelicic.com",
  });

  cookieStore.set("_ga_JE9CVLG7FP", "", {
    expires: new Date(Date.now() + 1000),
    domain: ".silo-jelicic.com",
  });

  revalidatePath("/");
}

export async function acceptAnalytics() {
  const cookieStore = await cookies();

  cookieStore.set("analyticsConsent", "true", {
    secure: true,
    sameSite: "lax",
    httpOnly: true,
    expires: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000),
  });

  revalidatePath("/");
}

export async function declineAnalytics() {
  const cookieStore = await cookies();

  cookieStore.set("analyticsConsent", "false", {
    secure: true,
    sameSite: "lax",
    httpOnly: true,
    expires: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000),
  });

  cookieStore.set("_ga", "", {
    expires: new Date(Date.now() + 1000),
    domain: ".silo-jelicic.com",
  });

  cookieStore.set("_ga_JE9CVLG7FP", "", {
    expires: new Date(Date.now() + 1000),
    domain: ".silo-jelicic.com",
  });

  revalidatePath("/");
}

export async function acceptThirdParty() {
  const cookieStore = await cookies();

  cookieStore.set("thirdPartyConsent", "true", {
    secure: true,
    sameSite: "lax",
    httpOnly: true,
    expires: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000),
  });

  revalidatePath("/");
}

export async function declineThirdParty() {
  const cookieStore = await cookies();

  cookieStore.set("thirdPartyConsent", "false", {
    secure: true,
    sameSite: "lax",
    httpOnly: true,
    expires: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000),
  });

  revalidatePath("/");
}

/*---------------------------------------------------------------kariera--------------------------------------------------------------------------*/

export async function addJob(formData: FormData) {
  await connectDB();
  const cookieStore = await cookies();
  const session = cookieStore.get("jwt")?.value as string;
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    cookieStore.delete("jwt");
    redirect("/login");
  }

  const auth = "Bearer " + session;

  const job = {
    title: formData.get("title"),
    titleSrb: formData.get("titleSrb"),
    titleSlo: formData.get("titleSlo"),
    responsibilities: formData.getAll("responsibilities"),
    responsibilitiesSrb: formData.getAll("responsibilitiesSrb"),
    responsibilitiesSlo: formData.getAll("responsibilitiesSlo"),
    qualifications: formData.getAll("qualifications"),
    qualificationsSrb: formData.getAll("qualificationsSrb"),
    qualificationsSlo: formData.getAll("qualificationsSlo"),
  };

  await fetch(`${process.env.API_URL}/api/jobs`, {
    method: "POST",
    headers: {
      authorization: auth,
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  revalidatePath("/rs/karijera");
  revalidatePath("/si/zaposlitev");
  revalidatePath("/career");
  revalidatePath("/dashboard/kariera");

  redirect("/dashboard/kariera");
}

export async function updateJob(formData: FormData, id: string) {
  await connectDB();
  const cookieStore = await cookies();
  const session = cookieStore.get("jwt")?.value as string;
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    cookieStore.delete("jwt");
    redirect("/login");
  }

  const auth = "Bearer " + session;

  const job = {
    title: formData.get("title"),
    titleSrb: formData.get("titleSrb"),
    titleSlo: formData.get("titleSlo"),
    responsibilities: formData.getAll("responsibilities"),
    responsibilitiesSrb: formData.getAll("responsibilitiesSrb"),
    responsibilitiesSlo: formData.getAll("responsibilitiesSlo"),
    qualifications: formData.getAll("qualifications"),
    qualificationsSrb: formData.getAll("qualificationsSrb"),
    qualificationsSlo: formData.getAll("qualificationsSlo"),
  };

  await fetch(`${process.env.API_URL}/api/jobs/${id}`, {
    method: "PATCH",
    headers: {
      authorization: auth,
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  revalidatePath("/rs/karijera");
  revalidatePath("/si/zaposlitev");
  revalidatePath("/career");
  revalidatePath("/dashboard/kariera");

  redirect("/dashboard/kariera");
}

export async function deleteJob(formData: FormData, id: string) {
  await connectDB();
  const cookieStore = await cookies();
  const session = cookieStore.get("jwt")?.value as string;
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    cookieStore.delete("jwt");
    redirect("/login");
  }

  const auth = "Bearer " + session;

  await fetch(`${process.env.API_URL}/api/jobs/${id}`, {
    method: "DELETE",
    headers: { authorization: auth },
  });

  revalidatePath("/dashboard/kariera");
  revalidatePath("/rs/karijera");
  revalidatePath("/si/zaposlitev");
  revalidatePath("/career");

  redirect("/dashboard/kariera");
}

export async function addToCareer(fromData: FormData, id: string) {
  await connectDB();
  const cookieStore = await cookies();
  const session = cookieStore.get("jwt")?.value as string;
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    cookieStore.delete("jwt");
    redirect("/login");
  }

  const auth = "Bearer " + session;

  await fetch(`${process.env.API_URL}/api/jobs/${id}`, {
    method: "PATCH",
    headers: {
      authorization: auth,
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ hidden: false }),
  });

  revalidatePath("/dashboard/kariera");
  revalidatePath("/rs/karijera");
  revalidatePath("/si/zaposlitev");
  revalidatePath("/career");
}

export async function hideFromCareer(fromData: FormData, id: string) {
  await connectDB();
  const cookieStore = await cookies();
  const session = cookieStore.get("jwt")?.value as string;
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    cookieStore.delete("jwt");
    redirect("/login");
  }

  const auth = "Bearer " + session;

  await fetch(`${process.env.API_URL}/api/jobs/${id}`, {
    method: "PATCH",
    headers: {
      authorization: auth,
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ hidden: true }),
  });

  revalidatePath("/dashboard/kariera");
  revalidatePath("/rs/karijera");
  revalidatePath("/si/zaposlitev");
  revalidatePath("/career");
}
