import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const allow = {
    rules: [
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ChatGPT-user", disallow: "/" },
      { userAgent: "*", allow: "/" },
    ],
  };

  const disAllow = {
    rules: [
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ChatGPT-user", disallow: "/" },
      { userAgent: "*", disallow: "/" },
    ],
  };
  const { IS_PROD } = process.env;

  return IS_PROD === "gladvinduer" ? allow : disAllow;
}
