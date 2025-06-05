<script lang="ts">
  import { withBase } from '../utils/path.ts';
  import { siteConfig } from '../config/siteConfig';
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterBrand,
    FooterIcon,
  } from "flowbite-svelte";

  import {
    FacebookSolid,
    GithubSolid,
    DiscordSolid,
    TwitterSolid,
    LinkedinSolid
  } from "flowbite-svelte-icons";
  // Mappage local entre le nom d'icône et son composant
  const iconMap = {
    linkedin: LinkedinSolid,
    twitter: TwitterSolid,
    github: GithubSolid,
    discord: DiscordSolid,
    facebook: FacebookSolid,
  } as const;

  import { navbar } from "../stores/layout";

  $: transluscent = $navbar.transluscent;
  $: footerClass = `text-white navbar bg-primary-50 ${
    transluscent ? "dark:bg-primary-50 dark:bg-opacity-20" : ""
  }`;
</script>

{#key $navbar}
  <footer>
    <Footer footerType="socialmedia" class={footerClass}>
      <div
        class="m-auto max-w-screen-2xl sm:flex sm:items-center sm:justify-between"
      >
        <div class="flex items-center justify-center">
          <img
            src="{withBase(`images/astronot-logo.webp`)}"
            class="mr-3 h-8 w-8 rounded-full sm:h-10 sm:w-10"
            width="40"
            height="40"
            alt="Flowbite Logo"
          />
          <a
            class="flex-none text-xl font-semibold text-gray-100"
            href="/"
            aria-label="Brand">AstroNot</a
          >
        </div>
        <div
          class="align-center flex flex-col items-center !text-gray-300 dark:!text-primary-200"
        >
          <FooterLinkGroup
            ulClass="flex flex-row justify-center items-center my-2 text-secondary-200 font-semibold"
          >
          {#each siteConfig.navLinks as link}
            <FooterLink ref={link.href}>{link.label}</FooterLink>
          {/each}
          </FooterLinkGroup>
          <FooterCopyright
            href="https://opensource.org/license/mit/"
            by="AstroNot 🚀🌚&nbsp;"
            copyrightMessage="Open Source & Free Forever ❤️"
            spanClass="text-xs text-grey-900"
          />
        </div>

        <div class="mt-4 flex items-center justify-center space-x-6 sm:mt-0">
        {#each siteConfig.social as { href, icon }}
          {#if iconMap[icon]}
            <FooterIcon href={href} target="_blank">
              <svelte:component
                this={iconMap[icon]}
                class="h-4 w-4 text-gray-100 hover:scale-125 dark:text-gray-100 dark:hover:text-white"
              />
            </FooterIcon>
          {/if}
        {/each}
        </div>
      </div>
    </Footer>
  </footer>
{/key}
