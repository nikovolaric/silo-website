import DashboardGetOneEdit from "@/app/_components/DashboardGetOneEdit";
import Spinner from "@/app/_components/Spinner";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Uredi download",
};

async function Page({ params }: { params: Promise<{ _id: string }> }) {
  const { _id } = await params;

  return (
    <div className="mx-auto my-10 max-w-7xl">
      <Suspense fallback={<Spinner />}>
        <DashboardGetOneEdit id={_id} />
      </Suspense>
    </div>
  );
}

export default Page;
