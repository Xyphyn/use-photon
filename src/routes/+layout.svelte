<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/Button.svelte';
	import { ArrowTopRightOnSquare } from 'svelte-heros-v2';

	import '../app.css';

	let { children } = $props();
</script>

<nav
	class={[
		'sticky top-0 z-50 mx-auto flex h-14 max-w-[96rem] items-center justify-between gap-6 bg-zinc-950'
	]}
>
	{#snippet link(href: string, text: string, major: boolean = false, ph: boolean = false)}
		{@const selected = page.url.pathname == href}
		<a
			{href}
			class={[
				selected ? 'text-zinc-900 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400',
				major ? 'text-xl first:mr-auto last:ml-auto' : 'text-lg',
				'group rounded-xl py-2 hover:text-zinc-900 hover:dark:text-zinc-50',
				ph ? 'px-4' : 'px-4'
			]}
		>
			{#if ph}
				<svg
					fill="currentColor"
					width="32"
					height="32"
					viewBox="15 15 70 70"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M45 20.8868C48.094 19.1004 51.906 19.1004 55 20.8868L72.7128 31.1132C75.8068 32.8996 77.7128 36.2008 77.7128 39.7735V60.2265C77.7128 63.7992 75.8068 67.1004 72.7128 68.8867L55 79.1133C51.906 80.8996 48.094 80.8996 45 79.1133L27.2872 68.8867C24.1932 67.1004 22.2872 63.7992 22.2872 60.2265V39.7735C22.2872 36.2008 24.1932 32.8996 27.2872 31.1132L45 20.8868Z"
					/>
				</svg>
			{/if}
			<div class={[ph && 'sr-only']}>
				{text}
			</div>
		</a>
	{/snippet}
	{@render link('/', 'Photon', true, true)}
	<Button
		color="tertiary"
		rounding="none"
		size="xl"
		class="h-full border-l border-zinc-800 font-medium"
	>
		{#snippet prefix()}
			<ArrowTopRightOnSquare size="16" variation="micro" />
		{/snippet}
		Try Photon
	</Button>
</nav>
<main
	class="relative z-0 mx-auto h-full min-h-screen w-full max-w-[96rem] font-sans dark:bg-zinc-950"
>
	{@render children()}
</main>
<footer class="flex w-full flex-row gap-4 p-8 text-slate-600 dark:text-zinc-400">
	<div>
		By
		<a href="https://xylight.dev" class="hover:underline">xylight.dev</a>
	</div>
	<div class="flex-1"></div>
	<a href="https://github.com/Xyphyn/photon">GitHub</a>
	<a href="https://matrix.to/#/#photon-lemmy-general:matrix.org">Matrix Room</a>
</footer>

<style>
	footer a:hover {
		text-decoration-line: underline;
	}

	nav {
		box-shadow: 0px 0px 0px 1px var(--color-zinc-800);
	}
</style>
