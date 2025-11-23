import { getSidebar } from "vitepress-plugin-auto-sidebar";

export default {
  base: "/sns-docs/",
  title: "SNS-DOCS",
  description: "Docs damit Dusk und Callahan nicht mich fragen",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: "/logo.svg",
    editLink: {
      pattern: "https://github.com/imLudwig/sns-docs/edit/main/docs/:path",
      text: "auf GitHub bearbeiten",
    },
    siteTitle: "SNS-Docs",
    outline: "deep",
    nav: [
      // { text: "Get Started", link: "/getstarted" },
      { text: "Das Projekt", link: "/about" },
      { text: "Docs", link: "/api" },
      { text: "Team", link: "/team" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/imLudwig/sns-docs" },
      { icon: "discord", link: "https://discord.gg/MDS4TXcn" },
    ],
sidebar: {
      "/api/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api", "sns_utils"],
        collapsible: true,
        collapsed: false,
      }),
      "/api": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api", "sns_utils"], 
        collapsible: true,
        collapsed: false,
      }),
      "/sns_utils/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api","sns_utils"],
        collapsible: true,
        collapsed: false,
      }),
    },
    footer: {
      message: "Released under the GNU General Public License v2.0.",
      copyright: "Copyright © 2022-present Vitepress Boilerplate, all Credits for the Site to Bytesizd",
    },
  },
};
