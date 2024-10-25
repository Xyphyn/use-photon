<script lang="ts">
  import Shell from '$lib/layout/Shell.svelte'
  import type { Snippet } from 'svelte'
  import '../app.css'

  let { children }: { children: Snippet } = $props()
</script>

<svelte:head>
  <title>Photon for Lemmy</title>
  <meta
    name="description"
    content="Photon is a better way to discover Lemmy, with an intuitive UX and a beautiful design."
  />
</svelte:head>

<Shell>
  {#snippet content()}
    {@render children?.()}
  {/snippet}
</Shell>
