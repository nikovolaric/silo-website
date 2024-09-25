import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "../_components/LoginForm";

export const metadata: Metadata = {
  title: "Vpis",
};

export const dynamic = "force-dynamic";

function Page() {
  const session = cookies().get("jwt")?.value;

  if (session) redirect("/");

  return (
    <>
      <div className="bg-neutral">
        <LoginForm />
      </div>
    </>
  );
}

export default Page;
