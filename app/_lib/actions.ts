"use server";

import { redirect } from "next/navigation";
import { sendComplaint, sendEnquiry } from "../_config/mail";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

/*-----------------------------------------------------------maili--------------------------------------------------------------------*/
export async function SendMail(formData: FormData) {
  const data: { name: string; mail: string; phone: string; message: string } = {
    name: formData.get("name") as string,
    mail: formData.get("mail") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
  };

  const result = await sendEnquiry(data);

  return result;
}

export async function newComplaint(formData: FormData) {
  const data: { subject: string; message: string } = {
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const result = await sendComplaint(data);

  return result;
}

/*-------------------------------------------------------------downloadi----------------------------------------------------------------*/

export async function deleteAsset(public_id: string) {
  await fetch(`${process.env.API_URL}/api/pdf`, {
    method: "POST",
    headers: {
      accept: "aplication/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({ id: public_id }),
  });
}

export async function createDownload(formData: FormData) {
  const data = Object.fromEntries(formData);

  await fetch(`${process.env.API_URL}/api/downloads`, {
    method: "POST",
    headers: {
      accept: "aplication/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  revalidatePath("/dashboard/downloads");
  revalidatePath("/onama");
  revalidatePath("/en/aboutus");
  revalidatePath("/usluge");
  revalidatePath("/en/services");

  redirect("/dashboard/downloads");
}

export async function editDownload(formData: FormData, id: string) {
  const data = Object.fromEntries(formData);

  await fetch(`${process.env.API_URL}/api/downloads/${id}`, {
    method: "PATCH",
    headers: {
      accept: "aplication/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  revalidatePath("/dashboard/downloads");
  revalidatePath(`/dashboard/downloads/${id}`);
  revalidatePath("/onama");
  revalidatePath("/en/aboutus");
  revalidatePath("/usluge");
  revalidatePath("/en/services");

  redirect("/dashboard/downloads");
}

export async function deleteDownload(id: string) {
  await fetch(`${process.env.API_URL}/api/downloads/${id}`, {
    method: "DELETE",
    // headers: {
    //   accept: "aplication/json",
    //   "content-type": "application/json",
    // },
  });

  revalidatePath("/dashboard/downloads");
  revalidatePath("/onama");
  revalidatePath("/en/aboutus");

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
        accept: "aplication/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      const error = await res.json();
      throw error;
    }
    const loggedInUser = await res.json();

    const { token } = loggedInUser;

    cookies().set("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    return loggedInUser;
  } catch (err) {
    return err;
  }
}
