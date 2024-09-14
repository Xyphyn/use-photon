<script>
  import Button from '$lib/ui/Button.svelte'
  import GridItem from '$lib/ui/GridItem.svelte'
  import { ArrowRight } from 'lucide-svelte'
</script>

<div class="flex flex-col items-center min-h-screen">

  <!-- <div class="relative max-w-lg w-full">
    <Post class="w-full" author="Jamie@lemmy.blahaj.zone" community="Ask Lemmy" title="What are you doing this weekend?" />
    <Comment class="absolute -bottom-1/3 sm:-right-1/4 w-full backdrop-blur-xl
     sm:max-w-sm mx-4" author="Xylight@lemdro.id" body="Imma go fishing by the lake near me, there's like nobody there so it's very nice" />
  </div> -->
  <header
    class="flex flex-col p-8 items-center justify-center text-center
    prose prose-xl prose-zinc dark:prose-invert
    prose-h1:mb-0 prose-p:max-w-lg h-96 relative"
  >
    <h1>
      Discover the fediverse like <span
        class="bg-gradient-to-r text-transparent bg-clip-text from-red-500 to-purple-600"
      >
        never before.
      </span>
    </h1>
    <p class="">
      Photon is a better way to discover Lemmy, with an intuitive user experience and
      a beautiful design.
    </p>
    <div class="flex gap-2">
      <Button href="https://phtn.app" size="lg" color="primary">
        Try it out <ArrowRight size={16} />
      </Button>
      <Button size="lg" href="#learn-more">Learn more</Button>
    </div>
  </header>
  <div class="perspective-container">
    <div class="perspective px-8 w-full rounded-xl
    border-b-0 rounded-b-none">
      <img src="/img/desktop-default-dark.webp" class="perspective-child border border-zinc-200 dark:border-zinc-700 " alt="" />
    </div>
  </div>
  <section
    class="flex flex-col p-16 border-y border-zinc-200 dark:border-zinc-900
    bg-slate-50 dark:bg-black w-full"
  >
    <div class="prose prose-xl dark:prose-invert !max-w-full prose-zinc w-full">
      <h1><span class="bg-gradient-to-r text-transparent from-red-500 to-purple-500 bg-clip-text">Discover</span> more</h1>
      <p>
        Photon enriches each element of the platform, providing a more comprehensive media experience.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-4">
        <GridItem class="w-full not-prose text-base">
          {#snippet title()}
          Multiple accounts
          {/snippet}
          Switch between different instances and profiles with just a click.
          {#snippet demo()}
            <div class="w-full h-32 flex flex-col px-4 overflow-hidden gap-px">
              {#snippet account(
                // @ts-ignore
                { name, instance, selected })}
                <div class:bg-zinc-900={selected} class="flex flex-row items-center gap-1
                p-2 px-3 rounded-lg cursor-pointer hover:dark:bg-zinc-800 transition-colors">
                  <div class="h-6 w-6 rounded-full bg-zinc-600"></div>
                  <div class="">
                    <div class="font-medium text-sm">{name}</div>
                    <div class="text-xs">{instance}</div>
                  </div>
                </div>
              {/snippet}
              
              {@render account({ name: 'Xylight', instance: 'lemdro.id', selected: true })}
              {@render account({ name: 'Jamie', instance: 'lemmy.blahaj.zone', selected: false })}
              {@render account({ name: 'Xydark', instance: 'lemm.ee', selected: false })}
            </div>
          {/snippet}
        </GridItem>
        <GridItem class="w-full not-prose text-base">
          {#snippet title()}
            Infinite scroll
          {/snippet}
          Seamlessly adds new posts as you scroll down. It's optional, if it's not your thing.
          {#snippet demo()}
            <div class="flex flex-col gap-6 px-6 h-32">
              {#snippet post()}
                <div class="flex flex-row items-center gap-2">
                  <div class="bg-zinc-200 dark:bg-zinc-800 h-14 w-14 rounded-md"></div>
                  <div class="space-y-2">
                    <div class="bg-zinc-200 dark:bg-zinc-800 w-64 h-4 rounded-md"></div>
                    <div class="bg-zinc-200 dark:bg-zinc-800 w-full h-8 rounded-md"></div>
                  </div>
                </div>
              {/snippet}
              {@render post()}
              {@render post()}
            </div>
          {/snippet}
        </GridItem>
        <GridItem class="w-full not-prose text-base">
          {#snippet title()}
            Command prompt
          {/snippet}
          Change your settings, open a page, and search your subscriptions instantly in one prompt.
        </GridItem>
        <GridItem class="w-full not-prose text-base">
          {#snippet title()}
            Rich embeds
          {/snippet}
          These embeds provide a quick preview of the destination content without distraction.
        </GridItem>
        <GridItem class="w-full not-prose text-base">
          {#snippet title()}
            Rich media
          {/snippet}
          With inline YouTube videos, image actions, and more forms of media supported, Photon makes all types of content nice to use.
        </GridItem>
    </div>
  </section>
  <section
    class="flex flex-col p-16 border-b border-zinc-200 dark:border-zinc-900
    bg-slate-50 dark:bg-zinc-950 w-full"
  >
    <div class="prose prose-xl dark:prose-invert prose-zinc w-full">
      <h1>Highly <span class="bg-gradient-to-r text-transparent bg-clip-text from-red-500 to-purple-500">customizable</span></h1>
      <p>Photon has countless settings and options to tweak to your liking. Whether you enjoy spacious or compact designs, a panel or dock, there's probably a setting for you.</p>
    </div>
  </section>
  <section
    class="flex flex-col p-16 border-b border-zinc-200 dark:border-zinc-900
    bg-slate-50 dark:bg-black w-full"
  >
    <div class="prose prose-xl dark:prose-invert prose-zinc w-full">
      <h1>A focus on <span class="bg-gradient-to-r text-transparent bg-clip-text from-red-500 to-purple-500">UX</span></h1>
      <p>Every component of Photon is carefully designed and thoughtfully placed to be intuitive.</p>
    </div>
  </section>
</div>

<style>
  .perspective-container {
    pointer-events: none;
    margin-top: -8rem;
    contain: strict;
    width: 100%;
    height: 48rem;
    /* height: 100%; */
    /* overflow: hidden; */
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .perspective {
    perspective: 4000px;
    perspective-origin: 100% 0;
    position: relative;
    height: 48rem;
    width: 96rem;
  }
  
  :global(.perspective-child) {
    transform: translateX(2%) scale(1.2) rotateX(47deg) rotateY(30deg) rotate(324deg);
    border-radius: 1rem;
    z-index: 10;
    margin-left: 15rem;
    margin-top: 4rem;
    object-position: 25% 50%;
  }
</style>