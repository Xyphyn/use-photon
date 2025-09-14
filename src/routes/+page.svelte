<script lang="ts">
	import type { Snippet } from 'svelte';

	import Button from '$lib/Button.svelte';
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

<section class="relative z-0 flex h-[60vh] items-center justify-center px-4 py-8 sm:p-16">
	<div class="pointer-events-none absolute -top-24 -z-10 w-full overflow-hidden">
		<svg
			class="dark:opacity-sm pointer-events-none h-[50rem] w-full origin-top scale-150 opacity-30 blur-3xl"
			width="1200"
			height="500"
			viewBox="50 75 1171 241"
			fill="none"
		>
			<defs>
				<linearGradient id="grad1" x1="568" y1="1" x2="1029" y2="65" gradientUnits="userSpaceOnUse">
					<stop offset="0" stop-color="#0b3b8c" />
					<stop offset="1" stop-color="#1fb4d4" />
				</linearGradient>

				<linearGradient
					id="grad2"
					x1="155"
					y1="-11"
					x2="512"
					y2="-162"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stop-color="#2e1a7b" />
					<stop offset="0.5" stop-color="#4a6de0" />
					<stop offset="1" stop-color="#6fe0e6" />
				</linearGradient>
				<linearGradient
					id="grad3"
					x1="155"
					y1="-11"
					x2="512"
					y2="-162"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stop-color="oklch(0.7 0.1376 210.49)" />
					<stop offset="0.5" stop-color="oklch(0.7 0.1376 210.49)" />
					<stop offset="1" stop-color="oklch(0.7 0.1796 293.08)" />
				</linearGradient>
			</defs>

			<g>
				<!-- <ellipse cx="650" cy="150" rx="258" ry="150" fill="url(#grad3)" /> -->
				<path
					d="M732-180C597-158 516-74 553 7s175 130 310 108 246-105 210-186-139-49-274-27z"
					fill="url(#grad1)"
				/>
				<ellipse cx="450" cy="-38" rx="258" ry="76" fill="url(#grad2)" />
			</g>
		</svg>
	</div>

	<heading
		class={[
			'prose prose-2xl prose-h1:font-medium prose-h1:font-display prose-h1:mb-0 prose-zinc dark:prose-invert text-center',
			'w-full text-balance'
		]}
	>
		<h1 class="font-display">
			Your portal
			<span
				class="bg-gradient-to-r from-zinc-900 to-blue-500 bg-clip-text text-transparent dark:from-zinc-50 dark:to-blue-400"
			>
				to the fediverse.
			</span>
		</h1>
		<p class="text-balance">
			Photon connects you to the fediverse with a fast and convenient interface that doesn't
			compromise on features.
		</p>
		<div class="not-prose mx-auto flex w-max gap-4">
			<Button
				transition={false}
				color="primary"
				rounding="pill"
				href="https://phtn.app"
				target="_blank"
				size="lg"
			>
				Try Photon
				<ArrowTopRightOnSquare variation="micro" size="18" />
			</Button>
			<Button transition={false} color="secondary" rounding="pill" href="#more" size="lg">
				Learn more
			</Button>
		</div>
	</heading>
</section>
<div class="mx-auto mb-24 max-w-7xl p-6">
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
			A concise interface.
		</h2>
		<p>
			Photon is designed to take away the clutter and complexity of the fediverse while retaining
			information density.
		</p>
	</heading>

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
										'transition-all hover:brightness-125'
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
<hr class="border-zinc-200 dark:border-zinc-800" />
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
				'flex flex-col gap-3 rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800',
				'group relative w-full max-w-80 overflow-hidden transition-colors hover:bg-blue-500/2'
			]}
		>
			{#if img}
				<div class="-mx-5 -mt-5 h-64 overflow-hidden rounded-2xl mask-b-from-0">
					{@render img()}
				</div>
			{/if}
			<div
				class={[
					'bg-radial from-blue-500/20 via-blue-500/0 via-70%',
					'absolute -top-[33rem] -right-[33rem] aspect-square h-auto w-4xl',
					'-z-10 opacity-0 transition-opacity group-hover:opacity-100'
				]}
			></div>
			<h3 class={['font-display w-full text-3xl']}>
				{name}
			</h3>
			<p class="text-lg text-zinc-700 dark:text-zinc-300">
				{description}
			</p>
			{#if url}
				<div
					class="mt-auto flex flex-row items-center justify-center gap-1 text-base text-blue-600 dark:text-blue-400"
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
			'Talk and chat with other members.',
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
	</div>
</section>
