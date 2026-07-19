import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  dest: "./dist",
  title: "Ethan Lau",
  description: "Ethan Lau 的个人博客",
  lang: "zh-CN",
  head: [
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "Ethan Lau" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Ethan Lau" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Ethan Lau 的个人博客",
      },
    ],
    ["meta", { property: "og:image", content: "/og.png" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: "/og.png" }],
  ],
  theme,
  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
  shouldPrefetch: false,
});
