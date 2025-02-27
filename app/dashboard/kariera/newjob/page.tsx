import DashboardNewJobForm from "@/app/_components/DashboardNewJobForm";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dodaj delovno mesto",
};

function Page() {
  return (
    <div className="mx-auto my-10 max-w-7xl">
      <DashboardNewJobForm />
    </div>
  );
}

export default Page;
