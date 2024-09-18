<script>
  import Shell from '$lib/layout/Shell.svelte'
  import '../app.css'
</script>

<svelte:head>
  <title>Photon for Lemmy</title>
  <meta
    name="description"
    content="Photon is a better way to discover Lemmy, with an intuitive UX and a beautiful design."
  />
</svelte:head>

<Shell>
  <slot slot="content"></slot>
</Shell>
