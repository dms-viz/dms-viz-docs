import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/dms-viz-docs/",
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
      { text: "Guide", link: "/introduction/what-is-dms-viz/" },
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
          { text: "What is dms-viz?", link: "/introduction/what-is-dms-viz/" },
          { text: "Getting Started", link: "/introduction/getting-started/" },
        ],
      },
      {
        text: "Preparing Data",
        collapsed: true,
        items: [
          {
            text: "Data Requirements",
            link: "/preparing-data/data-requirements/",
          },
          {
            text: "Command Line API",
            link: "/preparing-data/command-line-api/",
          },
        ],
      },
      {
        text: "Visualizing Data",
        collapsed: true,
        items: [
          { text: "Web Tool API", link: "/visualizing-data/web-tool-api/" },
          { text: "Vignettes", link: "/visualizing-data/vignettes/" },
        ],
      },
      {
        text: "Project Info",
        collapsed: true,
        items: [
          { text: "Contributing", link: "/project-info/contributing-guide/" },
          { text: "Contact", link: "/project-info/contact-info/" },
        ],
      },
    ],
  },
});
