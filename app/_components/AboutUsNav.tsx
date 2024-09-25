import Link from "next/link";

function AboutUsNav({
  srb,
  params,
}: {
  srb?: boolean;
  params?: {
    history?: boolean;
    quality?: boolean;
  };
}) {
  return (
    <ul className="mt-16 flex items-center justify-center gap-5 md:mt-20 lg:mt-40 lg:justify-start">
      <li>
        <Link
          className={`${
            !params?.quality && !params?.history
              ? "border-2 border-primary px-3 py-1 rounded-full text-primary"
              : "text-primary/50"
          } font-medium`}
          href={srb ? "/onama" : "/en/aboutus"}
          replace={true}
          scroll={false}
        >
          {srb ? "O nama" : "About us"}
        </Link>
      </li>
      <li>
        <Link
          className={`${
            params?.history
              ? "border-2 border-primary px-3 py-1 rounded-full text-primary"
              : "text-primary/50"
          } font-medium`}
          href={{
            pathname: srb ? "/onama" : "/en/aboutus",
            query: { history: "true" },
          }}
          replace={true}
          scroll={false}
        >
          {srb ? "Istorijat" : "History"}
        </Link>
      </li>
      <li>
        <Link
          className={`${
            params?.quality
              ? "border-2 border-primary px-3 py-1 rounded-full text-primary"
              : "text-primary/50"
          } font-medium`}
          href={{
            pathname: srb ? "/onama" : "/en/aboutus",
            query: { quality: "true" },
          }}
          replace={true}
          scroll={false}
        >
          {srb ? "Kvalitet" : "Quality"}
        </Link>
      </li>
    </ul>
  );
}

export default AboutUsNav;
