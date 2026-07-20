import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "主页", link: "/" },
  { text: "嵌入式", link: "/embedded/" },
  { text: "好玩的", link: "/interesting/" },
  { text: "Java", link: "/java/" },
  { text: "人工智能", link: "/ai/" },
  { text: "数据", link: "/database/" },
  { text: "生活", link: "/life/" },
  { text: "Kubernetes", link: "/kubernetes/" },
  { text: "系统设计", link: "/system-design/" },
  { text: "赞赏", link: "/donate/" },
  {
    text: "网站相关",
    children: [
      { text: "关于作者", link: "/about-the-author/" },
      { text: "友链", link: "/link/" },
    ],
  },
]);
