import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.silo-jelicic.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.silo-jelicic.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.silo-jelicic.com/aboutus",
      lastModified: new Date(),
    },
    {
      url: "https://www.silo-jelicic.com/sustainability",
      lastModified: new Date(),
    },
    {
      url: "https://www.silo-jelicic.com/career",
      lastModified: new Date(),
    },
    {
      url: "https://www.silo-jelicic.com/contact",
      lastModified: new Date(),
    },
  ];
}
