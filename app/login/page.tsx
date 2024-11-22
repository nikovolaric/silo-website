import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "../_components/LoginForm";
import User from "../_models/userModel";
import { jwtDecode } from "jwt-decode";

export const metadata: Metadata = {
  title: "Vpis",
};

export const dynamic = "force-dynamic";

async function Page() {
  const session = cookies().get("jwt")?.value;
  if (session) {
    const { id: userId }: { id: string } = await jwtDecode(session);
    const user = await User.findById(userId);
    if (user && user.role === "admin") {
      redirect("/dashboard");
    }
  }

  return (
    <>
      <div className="bg-neutral">
        <LoginForm />
      </div>
    </>
  );
}

export default Page;
