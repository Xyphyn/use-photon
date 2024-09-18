<script lang="ts">
  import Button from '$lib/ui/Button.svelte'
  import Logo from '$lib/ui/Logo.svelte'

  let { class: className = '', ...props }: { class?: string } = $props()
</script>

<nav
  {...props}
  class="flex items-center gap-2
   {className}"
>
  <Logo width={32} />
  <div class="flex-1"></div>
  <Button href="#learn-more" color="tertiary">About</Button>
  <Button href="https://phtn.app" color="primary">Try it</Button>
</nav>
