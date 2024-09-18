<script>
  import Navbar from './Navbar.svelte'
</script>

<div
  class="min-h-screen
 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100"
>
  <div
    class="sticky top-0 p-4 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50
     bg-zinc-50/70 dark:bg-zinc-950/70 backdrop-blur-xl"
  >
    <Navbar class="" />
  </div>
  <main class="z-0">
    <slot name="content" />
  </main>
</div>
