import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Fauzan Acyuto",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "fauzan-acyuto.com",
    ignorePatterns: ["private", "templates", ".obsidian", "snippets"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Atkinson Hyperlegible",
        body: "Atkinson Hyperlegible""Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFCF0",        // paper - page background
          lightgray: "#E6E4D9",    // base-100 - borders
          gray: "#878580",         // base-500 - graph links, heavier borders
          darkgray: "#100F0F",     // black - body text
          dark: "#100F0F",         // black - header text, icons
          secondary: "#205EA6",    // blue-600 - links, current graph node
          tertiary: "#4385BE",     // blue-400 - hover states, visited graph nodes
          highlight: "rgba(32, 94, 166, 0.15)", // blue-600 with transparency - highlighted text, search match
          textHighlight: "#F6E2A0", // yellow-100 - markdown highlighted text
        },
        darkMode: {
          light: "#FFFCF0",
          lightgray: "#E6E4D9",
          gray: "#878580",
          darkgray: "#100F0F",
          dark: "#100F0F",
          secondary: "#205EA6",
          tertiary: "#4385BE",
          highlight: "rgba(32, 94, 166, 0.15)",
          textHighlight: "#F6E2A0",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-light",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
