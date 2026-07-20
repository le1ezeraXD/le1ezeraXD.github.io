import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
  {
    hostname: "https://le1ezeraXD.github.io/",
    logo: "/avatar.jpg",
    favicon: "/avatar.jpg",
    sidebarSorter: ["readme", "order", "date-desc", "title", "filename"],
    markdown: {
      align: true,
      mermaid: true,
      imgSize: true,
      imgLazyload: true,
    },
    author: {
      name: "Ethan Lau",
      url: "/about-the-author/",
    },
    repo: "https://github.com/le1ezeraXD/le1ezeraXD.github.io",
    docsDir: "src",
    breadcrumb: false,
    navbar,
    sidebar,
    footer: "© 2026 Ethan Lau",
    displayFooter: true,
    pageInfo: [
      "Author",
      "Category",
      "Tag",
      "Date",
      "Word",
      "ReadingTime",
    ],
    blog: {
      name: "Ethan Lau",
      avatar: "/avatar.jpg",
      intro: "/about-the-author/",
      medias: {
        Github: "https://github.com/le1ezeraXD",
      },
    },
    plugins: {
      git: true,
      blog: {
        excerptLength: 50,
      },
      comment: false,
      copyright: false,
      feed: false,
      search: {
        isSearchable: (page) => page.path !== "/",
        maxSuggestions: 10,
      },
      icon: {
        prefix: "fa6-solid:",
      },
    },
  },
  {
    custom: true,
  },
);
