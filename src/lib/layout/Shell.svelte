<script lang="ts">
  import Navbar from './Navbar.svelte'
  interface Props {
    content?: import('svelte').Snippet;
  }

  let { content }: Props = $props();

  let scroll: number = $state(0)
</script>

<svelte:window bind:scrollY={scroll} />

<div
  class="min-h-screen
 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100"
>
  <div class="sticky top-0 p-4 md:p-8 z-50
  
  ">
    <div
      class="p-3 rounded-full  border
      {scroll > 0
      ? 'bg-zinc-50/70 dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800'
      : 'border-transparent'}
      backdrop-blur-xl w-max mx-auto transition-all"
    >
      <Navbar class="" />
    </div>
  </div>
  <main class="z-0">
    {@render content?.()}
  </main>
</div>
