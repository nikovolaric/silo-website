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
        className={`relative w-full h-44 ${
          !left ? "md:col-start-2" : ""
        } md:h-56 lg:h-60`}
      >
        <Image
          src={img}
          alt="service image"
          fill
          sizes="(max-width:768px) 95vw,50vw"
          className="object-cover rounded-lg"
          quality={30}
        />
      </div>
      <div
        className={`text-center bg-neutraltwo max-h-96 py-8 px-3 flex flex-col gap-5 justify-center rounded-lg shadow-2xl ${
          !left ? "md:col-start-1 md:row-start-1" : ""
        } md:h-56 lg:h-60`}
      >
        <h3 className="font-raj font-bold text-primary text-2xl">{title}</h3>
        <p className="text-secondary">{children}</p>
      </div>
    </div>
  );
}

export default HomeServiceCard;
