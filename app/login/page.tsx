import { Metadata } from "next";
import LoginForm from "../_components/LoginForm";

export const metadata: Metadata = {
  title: "Vpis",
};

async function Page() {
  return (
    <>
      <div className="bg-neutral">
        <LoginForm />
      </div>
    </>
  );
}

export default Page;
