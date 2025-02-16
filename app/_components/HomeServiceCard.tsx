import Image from "next/image";
import { ReactNode } from "react";

function HomeServiceCard({
  children,
  img,
  title,
  left,
}: {
  children: ReactNode;
  img: string;
  title: string;
  left: boolean;
}) {
  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
      <div
        className={`relative h-44 w-full ${
          !left ? "md:col-start-2" : ""
        } md:h-56 lg:h-60`}
      >
        <Image
          src={img}
          alt="service image"
          fill
          sizes="(max-width:768px) 95vw,50vw"
          className="rounded-lg object-cover"
          quality={img == "/consulting.jpg" ? 60 : 30}
          loading="eager"
        />
      </div>
      <div
        className={`flex max-h-96 flex-col justify-center gap-5 rounded-lg bg-neutraltwo px-3 py-8 text-center shadow-2xl ${
          !left ? "md:col-start-1 md:row-start-1" : ""
        } md:h-56 lg:h-60`}
      >
        <h3 className="font-raj text-2xl font-bold text-primary">{title}</h3>
        <p className="text-secondary">{children}</p>
      </div>
    </div>
  );
}

export default HomeServiceCard;
