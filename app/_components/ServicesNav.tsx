import Link from "next/link";

function ServicesNav({
  srb,
  params,
}: {
  srb: boolean;
  params?: {
    suppliers?: boolean;
    software?: boolean;
  };
}) {
  return (
    <ul className="mt-16 flex items-center justify-center gap-5 md:mt-20 lg:mt-40 lg:justify-start">
      <li>
        <Link
          className={`${
            !params?.software && !params?.suppliers
              ? "border-2 border-primary px-3 py-1 rounded-full text-primary"
              : "text-primary/50"
          } font-medium`}
          href={srb ? "/usluge" : "/en/services"}
          replace={true}
          scroll={false}
        >
          {srb ? "Usluge" : "Services"}
        </Link>
      </li>
      <li>
        <Link
          className={`${
            params?.suppliers
              ? "border-2 border-primary px-3 py-1 rounded-full text-primary"
              : "text-primary/50"
          } font-medium`}
          href={{
            pathname: srb ? "/usluge" : "/en/services",
            query: { suppliers: "true" },
          }}
          replace={true}
          scroll={false}
        >
          {srb ? "Dobavljaći" : "Suppliers"}
        </Link>
      </li>
      <li>
        <Link
          className={`${
            params?.software
              ? "border-2 border-primary px-3 py-1 rounded-full text-primary"
              : "text-primary/50"
          } font-medium`}
          href={{
            pathname: srb ? "/usluge" : "/en/services",
            query: { software: "true" },
          }}
          replace={true}
          scroll={false}
        >
          {srb ? "Softver" : "Software"}
        </Link>
      </li>
    </ul>
  );
}

export default ServicesNav;
