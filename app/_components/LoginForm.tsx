"use client";

import { useFormStatus } from "react-dom";
import { login } from "../_lib/actions";
import { useState } from "react";

function LoginForm() {
  const [err, setErr] = useState("");

  async function clientAction(formData: FormData) {
    const result = await login(formData);

    if (result instanceof Error) {
      setErr(result.message);
    }
  }

  return (
    <form
      className="mx-auto flex h-dvh max-w-7xl flex-col gap-6 pt-20"
      action={clientAction}
    >
      <h2 className="font-raj text-2xl font-bold text-primary">Vpiši se!</h2>
      <div className="flex w-1/3 flex-col gap-1">
        <label>Username:</label>
        <input
          type="text"
          className="h-8 rounded-md px-3"
          name="username"
          required
          autoComplete="off"
        />
      </div>
      <div className="flex w-1/3 flex-col gap-1">
        <label>Geslo:</label>
        <input
          type="password"
          className="h-8 rounded-md px-3"
          name="password"
          required
          autoComplete="off"
        />
      </div>
      {err && <p className="font-bold text-red-400">{err}</p>}
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-28 rounded-lg bg-primary py-1 text-lg text-neutral transition-colors duration-200 hover:bg-accent disabled:cursor-not-allowed disabled:bg-gray-400"
      disabled={pending}
    >
      {!pending ? "Vpiši se" : "..."}
    </button>
  );
}

export default LoginForm;
