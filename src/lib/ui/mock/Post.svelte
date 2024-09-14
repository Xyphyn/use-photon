<script lang="ts">
  import { ArrowBigUp, Ellipsis, MessageCircle } from 'lucide-svelte'
  import Button from '../Button.svelte'

  let {
    title,
    body,
    community,
    image,
    author,
    avatar,
    class: className = '',
  }: {
    title: string
    body?: string
    community: string
    image?: string
    author: string
    avatar?: string
    class?: string
  } = $props()
</script>

<div
  class="border rounded-2xl border-zinc-200
dark:border-zinc-800 bg-white/30 dark:bg-zinc-900/30
p-4 {className}"
>
  <div class="flex flex-col gap-2 z-0">
    <div class="grid w-full meta text-xs">
      <svelte:element
        this={avatar ? 'img' : 'div'}
        class="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 mr-2"
        style="grid-area: avatar;"
        src={avatar}
      ></svelte:element>
      <div style="grid-area: community">
        {community}
      </div>
      <div class="text-zinc-700 dark:text-zinc-300" style="grid-area: stats">
        {author}
      </div>
    </div>
    <span class="hover:underline text-lg font-medium">{title}</span>
    {#if image}
      <div
        class="rounded-xl max-h-96 relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 z-0"
      >
        <img
          loading="lazy"
          fetchpriority="auto"
          src={image}
          alt=""
          class="-z-10 absolute top-0 left-0 w-full h-full object-cover blur-lg
         scale-[1.2] opacity-20"
        />

        <img
          src={image}
          loading="lazy"
          class="max-h-[inherit] max-w-full h-auto z-30
                  transition-opacity duration-500 object-contain mx-auto"
          width={512}
          height={300}
          alt="Example post"
        />
      </div>
    {/if}
    {#if body}
      <p>
        {body}
      </p>
    {/if}
    <div class="flex flex-row gap-2 items-center">
      <Button
        rounding="pill"
        color="ghost"
        class="text-inherit dark:text-inherit"
      >
        <ArrowBigUp size={20} strokeWidth={1.5} />
        5.2K
      </Button>
      <Button
        rounding="pill"
        color="ghost"
        class="text-inherit dark:text-inherit"
      >
        <MessageCircle size={18} strokeWidth={1.5} />
        263
      </Button>
      <div class="flex-1"></div>
      <Button
        rounding="pill"
        color="ghost"
        class="text-inherit dark:text-inherit"
        size="square-md"
      >
        <Ellipsis size={18} strokeWidth={1.5} />
      </Button>
    </div>
  </div>
</div>

<style>
  .meta {
    display: grid;
    grid-template-areas:
      'avatar community'
      'avatar stats';
    gap: 0;
    grid-template-rows: auto auto;
    grid-template-columns: max-content minmax(0, auto);
  }
</style>
