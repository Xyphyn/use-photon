<script lang="ts">
	import type { Snippet } from 'svelte';

	import Button from '$lib/Button.svelte';
	import Placeholder from '$lib/Placeholder.svelte';
	import {
		ArrowTopRightOnSquare,
		BarsArrowDown,
		Language,
		ShieldCheck,
		Swatch,
		UserGroup,
		VideoCamera,
		ViewColumns
	} from 'svelte-heros-v2';
</script>

<svelte:head>
	<title>Photon</title>
</svelte:head>

<section class="section-dots relative z-0 flex h-[calc(100vh-8rem)] items-center px-4 py-8 sm:p-16">
	<div class="glow pointer-events-none"></div>

	<heading class={['w-full items-start space-y-16']}>
		<span class="rounded-full bg-zinc-200/50 px-6 py-3 font-mono text-lg dark:bg-zinc-800/50">
			v2.1.0
		</span>
		<h1 class="font-display text-7xl leading-[1.2] tracking-tighter lg:text-9xl">
			A portal
			<span
				class="bg-gradient-to-r from-zinc-900 to-indigo-500 bg-clip-text text-transparent dark:from-zinc-50 dark:to-indigo-400"
			>
				to the <br />
				fediverse.
			</span>
		</h1>
		<p class="max-w-2xl text-2xl leading-[1.5] text-balance text-zinc-600 dark:text-zinc-400">
			Photon connects you to the fediverse with a fast and convenient interface that doesn't
			compromise on features.
		</p>
		<div class="not-prose ml-auto flex w-max gap-4">
			<Button
				transition={false}
				color="primary"
				rounding="pill"
				href="https://phtn.app"
				target="_blank"
				size="custom"
				class="px-4 py-2.5 text-2xl!"
			>
				Try Photon
				<ArrowTopRightOnSquare variation="micro" size="18" />
			</Button>
		</div>
	</heading>
</section>
<hr
	class="h-px border-0 bg-gradient-to-r from-zinc-50 via-zinc-300 to-zinc-50 dark:from-zinc-950 dark:via-zinc-700 dark:to-zinc-950"
/>
<section
	class={[
		'relative z-0 mx-auto flex w-full max-w-full flex-col items-center justify-center px-4 py-8 sm:p-16',
		'prose prose-zinc dark:prose-invert prose-2xl prose-ol:p-0 prose-li:px-0 prose-p:text-xl',
		'prose-headings:font-medium prose-headings:font-display prose-headings:tracking-tighter text-center text-balance',
		'bg-gradient-to-b from-zinc-50 via-indigo-50 lg:mt-64 dark:bg-zinc-950 dark:from-zinc-950 dark:via-indigo-950/20'
	]}
>
	<heading class="max-w-3xl">
		<h2
			id="more"
			class={[
				'mt-2 bg-gradient-to-r bg-clip-text text-transparent',
				'from-zinc-400 via-zinc-900 to-zinc-400',
				'dark:from-zinc-500 dark:via-zinc-50 dark:to-zinc-500'
			]}
		>
			A concise interface.
		</h2>
		<p>
			Photon is designed to take away the clutter and complexity of the fediverse without
			compromising information density.
		</p>
	</heading>
	<div class="not-prose mx-auto max-w-7xl p-6">
		<div
			class="block overflow-hidden rounded-xl border border-slate-200 shadow-xl dark:hidden dark:border-zinc-800"
		>
			<enhanced:img src="./light-hero.png?w=1400;800;640;400" sizes="min(1280px,100vw)" />
		</div>
		<div
			class="hidden overflow-hidden rounded-xl border border-slate-200 shadow-xl dark:block dark:border-zinc-800"
		>
			<enhanced:img src="./dark-hero.png?w=1400;800;640;400" sizes="min(1280px,100vw)" />
		</div>
	</div>

	{#snippet feature({
		title,
		body,
		img,
		index,
		examples
	}: {
		title: string;
		body: string;
		img?: Snippet;
		index: number;
		examples?: { icon: any; text: string; href: string }[];
	})}
		<li
			class="flex w-full flex-col items-center gap-4 text-left lg:flex-row lg:gap-12 even:lg:flex-row-reverse xl:gap-20"
		>
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
					<ul class="font-display not-prose flex flex-col gap-2">
						{#each examples as ex}
							{@const Icon = ex.icon}
							<li class="flex flex-row items-center gap-2 text-xl">
								<a
									href={ex.href}
									class={[
										'rounded-xl border p-2',
										'border-zinc-200 bg-gradient-to-br',
										'from-zinc-50 to-zinc-100 dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-900',
										'transition-all hover:brightness-95 hover:dark:brightness-110'
									]}
								>
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
	{/snippet}

	<ol
		class={[
			'prose-2xl prose-p:text-lg relative flex w-full max-w-7xl flex-col gap-16',
			'before:absolute before:h-full before:border-l before:border-slate-200 before:xl:block before:dark:border-zinc-800',
			'before:left-1/2 before:-z-10 before:hidden before:border-dashed'
		]}
	>
		{#snippet img1()}
			<div class="block dark:hidden">
				<enhanced:img src="./feed-light.png?w=600;480" sizes="min(600px,100vw)" loading="lazy" />
			</div>
			<div class="hidden dark:block">
				<enhanced:img src="./feed-dark.png?w=600;480" sizes="min(600px,100vw)" loading="lazy" />
			</div>
		{/snippet}
		{@render feature({
			title: 'Your feed, simplified.',
			body: "The posts on your feed are designed by default to maximize information density and minimize clutter―and if that's not what you want, the interface is customizable.",
			index: 1,
			img: img1
		})}
		{#snippet img2()}
			<div class="block dark:hidden">
				<enhanced:img src="./convenient.png?w=600;480" sizes="min(600px,100vw)" loading="lazy" />
			</div>
			<div class="hidden dark:block">
				<enhanced:img
					src="./convenient-dark.png?w=600;480"
					sizes="min(600px,100vw)"
					loading="lazy"
				/>
			</div>
		{/snippet}
		{@render feature({
			title: 'Convenient and powerful',
			body: 'Features to improve your browsing experience are placed where and when you need them.',
			index: 2,
			img: img2,
			examples: [
				{
					icon: UserGroup,
					text: 'Switch between accounts across servers',
					href: 'https://phtn.app/accounts'
				},
				{
					icon: Language,
					text: 'Support for 19 languages',
					href: 'https://phtn.app/settings'
				},
				{
					icon: ShieldCheck,
					text: 'Advanced moderation tools',
					href: 'https://phtn.app/settings/moderation'
				},
				{
					icon: VideoCamera,
					text: 'Inline media embeds',
					href: 'https://phtn.app/settings/embeds'
				}
			]
		})}
		{#snippet img3()}
			<enhanced:img src="./themes.png?w=600,480" loading="lazy" />
		{/snippet}
		{@render feature({
			title: 'Customization without complexity',
			body: 'Photon has plenty of options to tweak and tune to your liking. Each setting is made easy to configure.',
			index: 3,
			img: img3,
			examples: [
				{
					icon: Swatch,
					text: 'Custom themes',
					href: 'https://phtn.app/theme'
				},
				{
					icon: ViewColumns,
					text: 'Cozy and compact modes',
					href: 'https://phtn.app/settings'
				},
				{
					icon: BarsArrowDown,
					text: 'Infinite scroll',
					href: 'https://phtn.app/settings'
				}
			]
		})}
	</ol>
</section>
<hr class="border-zinc-100 dark:border-zinc-800" />
<section
	class={[
		'relative z-0 mx-auto flex w-full max-w-full flex-col items-center justify-center px-4 py-8 sm:p-16',
		'prose prose-zinc dark:prose-invert prose-2xl prose-ol:p-0 prose-li:px-0 prose-p:text-xl',
		'prose-headings:font-medium prose-headings:font-display text-center text-balance'
	]}
>
	<heading class="max-w-3xl">
		<h2
			id="more"
			class={[
				'mt-2 bg-gradient-to-r bg-clip-text text-transparent',
				'from-zinc-400 via-zinc-900 to-zinc-400',
				'dark:from-zinc-500 dark:via-zinc-50 dark:to-zinc-500'
			]}
		>
			Open source community
		</h2>
		<p>
			Photon is and will always be free, open source software, and will never have any ads or
			tracking.
		</p>
	</heading>

	{#snippet thing(name: string, description: string, url?: string, img?: Snippet)}
		<svelte:element
			this={url ? 'a' : 'article'}
			href={url}
			class={[
				'flex flex-col gap-2 rounded-3xl border border-zinc-200 p-6 dark:border-zinc-800',
				'group relative w-full max-w-80 overflow-hidden text-left transition-colors hover:bg-blue-500/2'
			]}
		>
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
			<h3 class={['font-display w-full text-2xl']}>
				{name}
			</h3>
			<p class="text-base text-zinc-700 dark:text-zinc-300">
				{description}
			</p>
			{#if url}
				<div
					class="mt-auto flex flex-row items-center gap-1 text-base text-blue-600 dark:text-blue-400"
					aria-hidden="true"
				>
					<ArrowTopRightOnSquare size="16" variation="micro" />
					<div>{new URL(url).hostname}</div>
				</div>
			{/if}
		</svelte:element>
	{/snippet}
	<div
		class="not-prose mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-8 text-center"
	>
		{@render thing(
			'Matrix',
			'Talk and chat with other members about anything.',
			'https://matrix.to/#/#photon-lemmy-general:matrix.org'
		)}
		{@render thing(
			'GitHub',
			'Browse the source code and changelogs, or report bugs.',
			'https://github.com/Xyphyn/photon'
		)}
		{@render thing('Lemmy', 'Discuss and browse posts about Photon.', 'https://lemdro.id/c/photon')}
		{@render thing(
			'Weblate',
			'Help localize Photon into more languages.',
			'https://weblate.xylight.dev/projects/photon/test/'
		)}
		{@render thing(
			'Donate',
			'Support the development and future of Photon.',
			'https://buymeacoffee.com/xylight'
		)}
	</div>
</section>

<style>
	@reference '../app.css';
	.glow {
		animation: brighten ease-out 1s forwards;

		position: absolute;
		width: 100%;
		inset: 0;
		top: -10rem;
		height: 80rem;
		max-width: 100%;
		z-index: -1;
		overflow: hidden;
		background: radial-gradient(
			ellipse at top left in oklch,
			--alpha(var(--color-indigo-400) / 30%),
			--alpha(var(--color-blue-300) / 0%),
			transparent
		);
		background-position: 0% 0%;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		pointer-events: none;
	}

	.section-dots::before {
		/* content: '';
		position: absolute;
		inset: 0;
		top: -10rem;
		overflow: hidden;
		z-index: -10;
		mask-image: radial-gradient(ellipse at top left, black, transparent);
		background-image: radial-gradient(var(--color-zinc-500) 1px, transparent 0);
		@variant dark {
			background-image: radial-gradient(var(--color-zinc-700) 1px, transparent 0);
		}
		background-size: 80px 80px; */
	}
</style>
