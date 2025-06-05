import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
	site: 'https://nnosal.github.io/astronot-quicktest',
	base: '/',
	//publicDir: 'static',
	//outDir: 'public',
  integrations: [react(), tailwind(), mdx(), svelte()],
  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.unsplash.com'
    }]
  },
  vite: {
    assetsInclude: ['**/*.bmp'], // Allow importing image types not allowed by default
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],    
  }
});
