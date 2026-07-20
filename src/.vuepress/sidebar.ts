import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/category/": false,
  "/tag/": false,
  "/article/": false,
  "/star/": false,
  "/timeline/": false,
  "/embedded/": [
    {
      text: "嵌入式",
      collapsible: false,
      children: "structure",
    },
  ],
  "/life/": [
    {
      text: "生活",
      collapsible: false,
      children: "structure",
    },
  ],
  "/system-design/": [
    {
      text: "系统设计",
      collapsible: false,
      children: "structure",
    },
  ],
  "/donate/": [
    {
      text: "赞赏",
      collapsible: false,
      children: "structure",
    },
  ],
  "/about-the-author/": [
    {
      text: "关于作者",
      collapsible: false,
      children: "structure",
    },
  ],
  "/link/": [
    {
      text: "友链",
      collapsible: false,
      children: "structure",
    },
  ],
});
