import { ReactNode } from "react";

function HeadText({ children }: { children: ReactNode }) {
  return (
    <div className="mt-24 border-b-2 border-accent pb-5 md:mt-20 lg:mt-16">
      <h2 className="font-raj text-xl font-semibold text-primary">
        {children}
      </h2>
    </div>
  );
}

export default HeadText;
