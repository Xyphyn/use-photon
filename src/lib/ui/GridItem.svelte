<script lang="ts">
  import type { Snippet } from "svelte"

  let { children, title, demo, label, class: className = '' }: { children: Snippet, title: Snippet, demo?: Snippet, label?: Snippet, class?: string } = $props()
</script>

<div class="{className} relative container">
  <div class="absolute  -inset-px bg-gradient-to-br from-zinc-/40 to-zinc-400/0 "></div>
  <div class="border-shadow bg-white dark:bg-zinc-950
  text-left relative overflow-hidden z-0 box-border
  flex flex-col gap-1 w-full h-full {className}">
    <div class="flex flex-col p-8 gap-2">
      {#if label}
        <span class="text-zinc-600 dark:text-zinc-400 text-sm inline-flex items-center gap-1 font-medium">{@render label()}</span>
      {/if}
      <h3 class="font-semibold text-2xl dark:text-zinc-50 text-zinc-950 flex gap-2 items-center">{@render title()}</h3>
      <p class="text-lg">{@render children?.()}</p>
    </div>
    {@render demo?.()}
  </div>
</div>

<style lang="postcss">

  .border-shadow {
    box-shadow: 0px 0px 0px 1px theme(colors.zinc.800);
  }

  /* .container:first-child > .border-shadow {
    box-shadow: 1px 1px 0px 0px theme(colors.zinc.700);
  }

.container:last-child > .border-shadow {
  box-shadow: -1px -1px 0px 0px theme(colors.zinc.700);
} */
</style>