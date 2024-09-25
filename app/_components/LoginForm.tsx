"use client";

import { useFormStatus } from "react-dom";
import { login } from "../_lib/actions";
import { useState } from "react";

function LoginForm() {
  const [err, setErr] = useState("");

  async function clientAction(formData: FormData) {
    const result: { error?: string } = await login(formData);

    if (result?.error) {
      setErr(result.error);
    }
  }

  return (
    <form
      className="h-dvh flex flex-col gap-6 max-w-7xl mx-auto pt-20"
      action={clientAction}
    >
      <h2 className="font-bold font-raj text-2xl text-primary">Vpiši se!</h2>
      <div className="flex flex-col gap-1 w-1/3">
        <label>Username:</label>
        <input
          type="text"
          className="h-8 rounded-md px-3"
          name="username"
          required
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col gap-1 w-1/3">
        <label>Geslo:</label>
        <input
          type="password"
          className="h-8 rounded-md px-3"
          name="password"
          required
          autoComplete="off"
        />
      </div>
      {err && <p className="text-red-400 font-bold">{err}</p>}
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-primary text-neutral w-28 rounded-lg py-1 text-lg transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-accent"
      disabled={pending}
    >
      {!pending ? "Vpiši se" : "..."}
    </button>
  );
}

export default LoginForm;
