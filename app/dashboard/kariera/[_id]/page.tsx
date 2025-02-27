import DashboardGetOneJobEdit from "@/app/_components/DashboardGetOneJobEdit";
import Spinner from "@/app/_components/Spinner";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Uredi delovno mesto",
};

async function Page({ params }: { params: Promise<{ _id: string }> }) {
  const { _id } = await params;

  return (
    <div className="mx-auto my-10 max-w-7xl">
      <Suspense fallback={<Spinner />}>
        <DashboardGetOneJobEdit id={_id} />
      </Suspense>
    </div>
  );
}

export default Page;
