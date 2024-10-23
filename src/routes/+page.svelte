<script>
  import Button from '$lib/ui/Button.svelte'
  import GridItem from '$lib/ui/GridItem.svelte'
  import Comment from '$lib/ui/mock/Comment.svelte'
  import Post from '$lib/ui/mock/Post.svelte'
  import { ArrowRight, KeyRound, GalleryHorizontalEnd, Command, Link, Image, Heart, Paintbrush, Code, Newspaper } from 'lucide-svelte'
</script>

<div class="flex flex-col items-center min-h-screen">

  <!-- <div class="relative max-w-lg w-full">
    <Post class="w-full" author="Jamie@lemmy.blahaj.zone" community="Ask Lemmy" title="What are you doing this weekend?" />
    <Comment class="absolute -bottom-1/3 sm:-right-1/4 w-full backdrop-blur-xl
     sm:max-w-sm mx-4" author="Xylight@lemdro.id" body="Imma go fishing by the lake near me, there's like nobody there so it's very nice" />
  </div> -->
  <header
    class="flex flex-col p-8 xl:py-16
    prose prose-xl xl:prose-2xl prose-zinc dark:prose-invert
    prose-h1:mb-0 prose-h1:font-bold tracking-tight
    prose-p:max-w-lg xl:prose-p:max-w-xl h-96 relative
    w-full items-center text-center mb-24"
  >
    <h1>
      <span class="bg-gradient-to-r text-transparent bg-clip-text from-purple-400 via-pink-400 to-orange-400">Discover the fediverse</span>
      <br/>with Photon
    </h1>
    <p class="">
      A better way to discover Lemmy.
    </p>
    <div class="flex gap-2 not-prose">
      <Button href="https://phtn.app" size="lg" color="primary">
        Try it out <ArrowRight size={16} />
      </Button>
      <Button color="tertiary" size="lg" href="#learn-more">Learn more</Button>
    </div>
  </header>
  <div class="perspective-container">
    <div class="perspective px-8 w-full rounded-xl
    border-b-0 rounded-b-none">
      <picture class="contents">
        <source media="(prefers-color-scheme: dark)" srcset="/img/desktop-default-dark.webp">
        <source media="(prefers-color-scheme: light)" srcset="/img/desktop-default-light.webp">
        <img class="perspective-child border border-zinc-200 dark:border-zinc-700 " alt="" />
      </picture>
    </div>
  </div>

  <div class="mx-auto flex gap-2 items-center flex-wrap">
    <Button color="tertiary" size="lg" href="https://github.com/xyphyn/photon">
      <Code size={16} />
      GitHub
    </Button>
    <Button color="tertiary" size="lg" href="https://phtn.app/c/photon@lemdro.id"
    class="">
      <Newspaper size={16} />
      <span>Photon<span class="text-zinc-600 dark:text-zinc-400">@lemdro.id</span></span>
    </Button>
    <Button color="tertiary" size="lg" href="https://buymeacoffee.com/xylight">
      <Heart size={16} />
      Donate
    </Button>
  </div>
  <section
    class="flex flex-col p-8 md:p-12 lg:p-16 2xl:px-32"
  >
    <div class="prose prose-lg dark:prose-invert !max-w-full prose-zinc w-full
    prose-h1:font-medium">
      <header>
        <span></span>
        <h1 class="font-medium">Discover more</h1>
      </header>
      <p>
        Photon enriches each element of the platform, providing a more comprehensive media experience.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full
      rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <GridItem class="w-full not-prose text-base">
          {#snippet label()}
            <KeyRound size={16} /> Multiple accounts
          {/snippet}
          {#snippet title()}
            Switch profiles instantly.
          {/snippet}
          Explore different instances quickly and easily.
          {#snippet demo()}
            <div class="w-full min-h-32 flex flex-col px-4 overflow-hidden gap-px">
              {#snippet account(
                // @ts-ignore
                { name, instance, selected })}
                <div class:bg-zinc-100={selected} class:dark:bg-zinc-900={selected} class="flex flex-row items-center gap-1
                p-2 px-3 rounded-lg cursor-pointer hover:bg-zinc-50 hover:dark:bg-zinc-800 transition-colors">
                  <div class="h-6 w-6 rounded-full bg-zinc-100 dark:bg-zinc-600"></div>
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
          {#snippet label()}
            <GalleryHorizontalEnd size={16} /> Infinite scroll
          {/snippet}
          {#snippet title()}
            Find more without stopping.
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
          {#snippet label()}
            <Command size={16} /> Command prompt
          {/snippet}
          {#snippet title()}
            Explore more, faster.
          {/snippet}
          Switch feeds, change your settings, open a page, and search your subscriptions instantly in one prompt.
        </GridItem>
        <GridItem class="w-full md:col-span-2 xl:col-span-3 not-prose
        ">
          {#snippet label()}
            <Paintbrush size={16} /> UI design
          {/snippet}
          {#snippet title()}
            A thoughtful user experience.
          {/snippet}
          <div class="max-w-3xl">
            Photon has an opinionated design meant to be intuitive and appealing. Every component is carefully placed and designed to ensure the best experience.
          </div>
        </GridItem>
        <GridItem class="w-full not-prose text-base">
          {#snippet label()}
            <Link size={16} /> Rich embeds
          {/snippet}
          {#snippet title()}
            Enhancing Lemmy's core: beautiful link aggregation.
          {/snippet}
          Rich embeds provide a quick preview of the destination content without distraction.
        </GridItem>
        <GridItem class="w-full not-prose text-base">
          {#snippet label()}
            <Image size={16} /> Rich media
          {/snippet}
          {#snippet title()}
            Multimedia features.
          {/snippet}
          With inline YouTube videos, image actions, and more forms of media supported, Photon makes all types of content nice to use.
        </GridItem>
        <GridItem class="w-full not-prose text-base">
          {#snippet label()}
            <Image size={16} /> View options
          {/snippet}
          {#snippet title()}
            Choose your perfect view.
          {/snippet}
          Cozy mode is perfect for those who want a spacious and relaxed user experience, while compact mode is perfect for power users who want to scan more content at a glance.
        </GridItem>
    </div>
  </section>
  <!-- <div class="flex flex-wrap">
    <Post upvotes={72} comments={27} author="qaz@lemmy.world" community="196" title="Photon ftw rule" avatar="https://lemmy.blahaj.zone/pictrs/image/fwrQkf9edg.png?format=webp&thumbnail=64" image="https://pictrs.blahaj.zone/pictrs/image/8b06fcb0-140f-4bbe-b3bd-1c5929b0a427.png?format=webp" href="https://lemmy.world/post/12956274" />
    <Comment author="Streamwave@feddit.uk" body="...Lemmy is fine. Especially with the Photon frontend." />
  </div> -->
  <footer class="prose prose-md dark:prose-invert prose-zinc">
    <p>Made with ❤️ by Xylight</p>
  </footer>
</div>

<style>
  @keyframes moveInCircle {
    0% {
      transform: translate(
        /* x = centerX + radius * cos(angle) */
        calc(130px + 100 * cos(0deg)),
        /* y = centerY + radius * sin(angle) */
        calc(130px + 100 * sin(0deg))
      );
    }
    25% {
      transform: translate(
        calc(130px + 100 * cos(90deg)),
        calc(130px + 100 * sin(90deg))
      );
    }
    50% {
      transform: translate(
        calc(130px + 100 * cos(180deg)),
        calc(130px + 100 * sin(180deg))
      );
    }
    75% {
      transform: translate(
        calc(130px + 100 * cos(270deg)),
        calc(130px + 100 * sin(270deg))
      );
    }
    100% {
      transform: translate(
        calc(130px + 100 * cos(360deg)),
        calc(130px + 100 * sin(360deg))
      );
    }
    /* ... and so on for other angles */
  }

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
  
  .perspective-child {
    transform: translateX(2%) scale(1.2) rotateX(47deg) rotateY(30deg) rotate(324deg);
    border-radius: 1rem;
    z-index: 10;
    margin-left: 15rem;
    margin-top: 4rem;
    object-position: 25% 50%;
  }
</style>