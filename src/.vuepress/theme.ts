import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";

export default hopeTheme(
  {
    hostname: "https://le1ezeraXD.github.io/",
    logo: "/avatar.jpg",
    favicon: "/avatar.jpg",
    author: {
      name: "Ethan Lau",
    },
    breadcrumb: false,
    navbar,
    sidebar: false,
    footer: "© 2026 Ethan Lau",
    displayFooter: true,
    pageInfo: ["Date", "ReadingTime"],
    blog: {
      name: "Ethan Lau",
      avatar: "/avatar.jpg",
      intro: "/",
      medias: {},
    },
    plugins: {
      git: false,
      blog: {
        excerptLength: 50,
      },
      comment: false,
      copyright: false,
      feed: false,
      search: false,
      icon: {
        prefix: "fa6-solid:",
      },
    },
  },
  {
    custom: true,
  },
);
