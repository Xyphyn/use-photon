<script lang="ts">
  import Button from '$lib/ui/Button.svelte'
  import Logo from '$lib/ui/Logo.svelte'

  let { class: className = '', ...props }: { class?: string } = $props()
</script>

<nav
  {...props}
  class="flex items-center gap-1
  bg-white/50 dark:bg-zinc-950/50 border border-zinc-200/50 dark:border-zinc-800/50
p-4 py-3 rounded-full backdrop-blur-xl z-50 {className}"
>
  <Logo width={32} />
  <div class="flex-1"></div>
  <Button color="tertiary" class="!text-base" rounding="pill">About</Button>
  <Button color="primary" class="!text-base" rounding="pill">Try it</Button>
</nav>
