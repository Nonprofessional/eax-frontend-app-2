import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  theme: defaultTheme({
    navbar: [
      { text: "home", link: "/index.md" },
      {
        text: "Development",
        children: [
          "/development/tool/index.md",
          "/development/programming-language/index.md",
        ],
      },
      {
        text: "Operation",
        children: [
          "/operation/windows/index.md",
          "/operation/linux/index.md",
          "/operation/network/index.md",
        ],
      },
      { text: "Security", link: "/security/index.md" },
    ],
    sidebar: {
      "/development/": [
        {
          text: "Tool",
          collapsible: true,
          children: ["/development/tool/vim.md", "/development/tool/git.md"],
        },
        {
          text: "Programming Language",
          collapsible: true,
          children: [
            "/development/programming-language/html.md",
            "/development/programming-language/css.md",
            "/development/programming-language/javascript.md",
          ],
        },
      ],
      "/operation/": [
        {
          text: "Windows",
          collapsible: true,
          children: ["/operation/windows/index.md"],
        },
        {
          text: "Linux",
          collapsible: true,
          children: [
            "/operation/linux/command.md",
            "/operation/linux/network-configure.md",
            "/operation/linux/others.md",
          ],
        },
        {
          text: "Network",
          collapsible: true,
          children: ["/operation/network/index.md"],
        },
      ],
      "/security/": [],
    },
    home: "/index.md",
    repo: "https://github.com/Nonprofessional/eax-frontend-app-2",
    editLink: false,
    lastUpdated: false,
    contributors: false,
  }),
  base: "/apps/2/",
  title: "Cheat Sheet",
});
