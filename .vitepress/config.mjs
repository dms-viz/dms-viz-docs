import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "dms-viz",
  description: "Documentation for dms-viz.github.io",
  head: [["link", { rel: "icon", href: "/flavicorn.ico" }]],
  // Global Site Theme
  themeConfig: {
    logo: "/logo.png",
    // Configure Navigation Bar
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/what-is-dms-viz" },
      {
        text: "Changelog",
        items: [
          {
            text: "Python CLI",
            link: "https://github.com/dms-viz/configure_dms_viz/blob/main/CHANGELOG.md",
          },
          {
            text: "Visualization",
            link: "https://github.com/dms-viz/dms-viz.github.io/blob/main/CHANGELOG.md",
          },
        ],
      },
    ],
    // Configure Social Links
    socialLinks: [{ icon: "github", link: "https://github.com/dms-viz" }],
    // Configure Footer
    footer: {
      copyright:
        "Copyright © 2023-present <a href='https://research.fredhutch.org/bloom/en.html'>Bloom Lab</a>",
    },

    // Configure Sidebar
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is dms-viz?", link: "/what-is-dms-viz" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Preparing Data",
        items: [{ text: "Data Requirements" }, { text: "Command Line API" }],
      },
      {
        text: "Visualizing Data",
        items: [{ text: "Features" }, { text: "Examples" }],
      },
      {
        text: "Project Info",
        items: [
          { text: "Developing" },
          { text: "Manuscript" },
          { text: "Contact" },
        ],
      },
    ],
  },
});
