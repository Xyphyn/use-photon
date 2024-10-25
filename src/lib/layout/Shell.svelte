<script>
  import Navbar from './Navbar.svelte'
</script>

<div
  class="min-h-screen
 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100"
>
  <div class="sticky top-0 p-4 md:p-8 z-50">
    <div
      class="p-3 rounded-full
     bg-zinc-50/70 dark:bg-zinc-900/30
     border border-zinc-200 dark:border-zinc-800 backdrop-blur-xl"
    >
      <Navbar class="" />
    </div>
  </div>
  <main class="z-0">
    <slot name="content" />
  </main>
</div>
