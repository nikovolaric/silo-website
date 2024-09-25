import { ReactNode } from "react";

function HeadText({ children }: { children: ReactNode }) {
  return (
    <div className="mt-24 pb-5 border-b-2 border-accent md:mt-20 lg:mt-16">
      <h2 className="font-raj font-semibold text-xl text-priamry">
        {children}
      </h2>
    </div>
  );
}

export default HeadText;
