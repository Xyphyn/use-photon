<script lang="ts">
	let { children } = $props();
</script>

<section class={['prose prose-zinc dark:prose-invert prose-2xl']}>
	{@render children?.()}
</section>

<style>
	@reference '../../app.css';

	section {
		position: relative;
		z-index: 0;

		max-width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding: calc(var(--spacing) * 4) calc(var(--spacing) * 8);
		@variant sm {
			padding: calc(var(--spacing) * 16) calc(var(--spacing) * 16);
		}

		:global {
			ol {
				padding: 0;
			}
			li {
				padding-left: 0;
				padding-right: 0;
			}
			p {
				font-size: var(--text-xl);
			}
			h1,
			h2,
			h3 {
				font-weight: var(--font-medium);
				font-family: var(--font-display);
				letter-spacing: var(--tracking-tighter);
				text-align: center;
				text-wrap: balance;
			}
		}
	}
</style>
