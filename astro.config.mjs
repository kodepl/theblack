import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  site: "https://www.theblack.pl",
  trailingSlash: "always",
  compressHTML: true,
  markdown: {
    rehypePlugins: [rehypeSlug],
    smartypants: false,
  },
});
