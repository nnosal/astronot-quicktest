<script>
  import { withBase } from '../../utils/path';
  import { Section, HeroHeader } from "flowbite-svelte-blocks";
  import { Button, DeviceMockup } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import ParallaxDevices from "./_ParallaxDevices.svelte";
</script>
<!-- Reference: https://flowbite-svelte-blocks.vercel.app/marketing/hero -->
<Section name="heroVisual">
  <div class="mr-auto place-self-center lg:col-span-7">
    <HeroHeader h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white" pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
      <svelte:fragment slot="h1">
        Moi en
        <mark
          class="my-1 rounded bg-primary-50 px-2 py-0 text-white dark:bg-primary-700"
          >quelques</mark
        >
        🌰
      </svelte:fragment>
      <svelte:fragment slot="paragraph">
        <div class="block">
          <p>Développeur fullstack & DevOps, je travaille à mon compte depuis près plus de 10 ans, avec une orientation claire : aider les entreprises à se transformer et à scaler grâce au digital, en combinant technique, stratégie et pilotage.
          </p>
          &nbsp;
          <p>
          Je suis actuellement en formation pour devenir Chief Digital Officer (CDO), avec l’objectif d’accompagner des équipes, structurer des roadmaps digitales, et piloter des projets à fort impact — au-delà du code, dans une logique produit + business.
          J’ai plusieurs années d’expérience sur des stacks modernes (Jamstack, serverless, CI/CD, cloud-native), en création ou refonte de plateformes orientées croissance, automation et performance. Aujourd’hui, je travaille sur des projets mêlant automatisation, marketing ciblé, et IA appliquée (RAG, copilotes métiers, etc.), avec un fort accent sur la création de valeur concrète et mesurable.
          </p>
          &nbsp;
          <p>
            <b>Mon ambition</b> : être le pont entre équipes tech, métiers, et les enjeux de croissance.
            En dehors des missions, je continue de contribuer à l’écosystème (open source, outils dev), et je garde du temps pour la lecture, les outils no-code, et quelques side-projects un peu fous. 🚀
          </p>
        </div>
      </svelte:fragment>
  </HeroHeader>
  </div>
  <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
    <img src="{withBase(`/images/zurich_and_seattle_1.png`)}" alt="mockup" object-fit="cover" layout="fill" />

  </div>
</Section>

