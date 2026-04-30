<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		body: string;
		img?: Snippet;
		index: number;
		examples?: { icon: any; text: string; href: string }[];
	}

	let { title, body, img, index, examples }: Props = $props();
</script>

<li class="contents">
	<div class="w-full flex-1 shrink text-wrap">
		<h3
			class="mt-0! max-w-full bg-gradient-to-l from-zinc-900 to-zinc-500 bg-clip-text text-center text-transparent md:text-left! dark:from-blue-200 dark:to-zinc-300"
		>
			{title}
		</h3>
		<p class="text-center md:text-left">
			{body}
		</p>
		{#if examples}
			<ul class="not-prose flex flex-col gap-2">
				{#each examples as ex}
					{@const Icon = ex.icon}
					<li class="example">
						<a href={ex.href} class="example-icon">
							<Icon variation="mini" size="20" />
						</a>
						{ex.text}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	<div
		class={[
			'ignore-grid-padding',
			'not-prose w-full max-w-full min-w-0 overflow-hidden',
			'relative z-0 flex shrink-0  shadow-lg'
		]}
	>
		{@render img?.()}
		<div class="absolute -z-10 scale-200 overflow-hidden opacity-20 blur-3xl">
			{@render img?.()}
		</div>
	</div>
</li>

<style>
	@reference '../../app.css';
	.feature {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		gap: calc(var(--spacing) * 4);
		text-align: left;

		@variant lg {
			&:nth-child(even) {
				flex-direction: row-reverse;
			}
			gap: calc(var(--spacing) * 12);
			flex-direction: row;
		}

		@variant xl {
			gap: calc(var(--spacing) * 20);
		}
	}

	.example {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: calc(var(--spacing) * 2);
		text-align: left;
		font-size: var(--text-xl);
	}

	.example-icon {
		border-radius: var(--radius-xl);
		border: 1px solid var(--color-zinc-200);
		padding: calc(var(--spacing) * 2);

		background: linear-gradient(to bottom right, var(--color-zinc-50), var(--color-zinc-100));

		@variant dark {
			border-color: var(--color-zinc-800);
			background: linear-gradient(to bottom right, var(--color-zinc-800), var(--color-zinc-900));
		}

		@variant hover {
			filter: brightness(95%);
			@variant dark {
				filter: brightness(110%);
			}
		}
	}
</style>
