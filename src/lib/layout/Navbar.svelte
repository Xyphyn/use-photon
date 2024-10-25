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
  <a href="/"> <Logo width={32} /></a>
</nav>
