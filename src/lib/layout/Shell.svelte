<script>
  import Navbar from './Navbar.svelte'
</script>

<div
  class="min-h-screen
 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100"
>
  <div class="sticky top-0 p-4 w-full z-50">
    <Navbar class="max-w-screen-lg mx-auto" />
  </div>
  <main class="z-0">
    <slot name="content" />
  </main>
</div>
