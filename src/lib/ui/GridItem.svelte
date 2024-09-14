<script lang="ts">
  import type { Snippet } from "svelte"

  let { children, title, demo, class: className = '' }: { children: Snippet, title: Snippet, demo?: Snippet, class?: string } = $props()
</script>

<div class="{className} rounded-xl relative">
  <div class="absolute rounded-2xl -inset-px bg-gradient-to-br from-zinc-400/40 to-white/0 "></div>
  <div class="rounded-2xl
  border border-zinc-200 dark:border-zinc-800 border-opacity-50 bg-white dark:bg-zinc-900
  text-left relative overflow-hidden z-0 box-border
  flex flex-col gap-1 w-full h-full {className}">
    <div class="flex flex-col p-6 gap-2">
      <h3 class="font-medium text-xl">{@render title()}</h3>
      {@render children()}
    </div>
    {#if demo}
      {@render demo()}
    {/if}
  </div>
</div>