<script lang="ts">
	import Placeholder from '$lib/Placeholder.svelte';
	import type { Snippet } from 'svelte';
	import { ArrowTopRightOnSquare } from 'svelte-heros-v2';

	interface Props {
		name: string;
		description: string;
		url?: string;
		img?: Snippet;
	}

	let { name, description, url, img }: Props = $props();
</script>

<svelte:element this={url ? 'a' : 'article'} href={url} class="end-card group">
	<div class="-m-6 overflow-hidden rounded-2xl mask-b-from-0">
		{#if img}
			{@render img()}
		{:else}
			<Placeholder seed={name} />
		{/if}
	</div>
	<div
		class={[
			'bg-radial from-blue-500/20 via-blue-500/0 via-70%',
			'absolute -top-[33rem] -right-[33rem] aspect-square h-auto w-4xl',
			'-z-10 opacity-0 transition-opacity group-hover:opacity-100'
		]}
	></div>
	<h3 class={['w-full text-left! font-sans! text-2xl']}>
		{name}
	</h3>
	<p class="text-base text-zinc-700 dark:text-zinc-300">
		{description}
	</p>
	{#if url}
		<div class="link" aria-hidden="true">
			<ArrowTopRightOnSquare size="16" variation="micro" />
			<div>{new URL(url).hostname}</div>
		</div>
	{/if}
</svelte:element>

<style>
	@reference '../../app.css';
	.end-card {
		display: flex;
		flex-direction: column;
		gap: calc(var(--spacing) * 2);
		border-radius: var(--radius-3xl);
		border: 1px solid var(--color-zinc-200);
		padding: calc(var(--spacing) * 6);
		position: relative;
		width: 100%;
		max-width: calc(var(--spacing) * 80);
		overflow: hidden;
		text-align: left;
		transition: colors 0.5s linear;

		@variant dark {
			border-color: var(--color-zinc-800);
		}

		@variant hover {
			background: --alpha(var(--color-blue-500) / 2%);
		}
	}

	.link {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--spacing);
		font-size: var(--text-base);
		margin-top: auto;
		color: var(--color-blue-600);

		@variant dark {
			color: var(--color-blue-400);
		}
	}
</style>
