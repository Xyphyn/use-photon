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

<li class="feature">
	<div class="order-2 w-full flex-1 shrink text-wrap xl:order-1">
		<h3
			class="mt-0! w-max max-w-full bg-gradient-to-l from-zinc-900 to-zinc-500 bg-clip-text text-transparent dark:from-blue-200 dark:to-zinc-300"
		>
			{title}
		</h3>
		<p>
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
			'font-display order-1 grid h-10 w-10 place-items-center rounded-3xl text-xl lg:order-2',
			'self-start border border-zinc-200 bg-white lg:self-center dark:border-zinc-800 dark:bg-zinc-900'
		]}
	>
		{index}
	</div>
	<div
		class={[
			'relative block h-full w-full flex-1 rounded-xl',
			'not-prose overflow-hidden border border-zinc-200 dark:border-zinc-800',
			'order-3 shrink-0 shadow-lg'
		]}
	>
		{@render img?.()}
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
