import { getSidebar } from "vitepress-plugin-auto-sidebar";

export default {
  base: "/",
  title: "DOCS",
  description: "Docs damit Dusk und Callahan nicht mich fragen",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    outline: {
          level: [2, 3], 
          label: 'Auf dieser Seite' 
        },
        
        lastUpdatedText: 'Zuletzt aktualisiert', 

        docFooter: {
          prev: 'Vorherige Seite',
          next: 'Nächste Seite'
        },

        returnToTopLabel: 'Zurück nach oben',
        sidebarMenuLabel: 'Menü',
        langMenuLabel: 'Sprache ändern',
    logo: "/logo.png",
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
        contentDirs: ["api", "SNS_UTILS"],
        collapsible: true,
        collapsed: false,
      }),
      "/api": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api", "SNS_UTILS"], 
        collapsible: true,
        collapsed: false,
      }),
      "/SNS_UTILS/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api","SNS_UTILS"],
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
