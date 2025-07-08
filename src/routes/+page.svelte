<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import logo from './logo.svg';

	import {
		QuestionMarkCircle,
		ChevronUp,
		ChevronDown,
		ChatBubbleOvalLeftEllipsis,
		CpuChip,
		ArrowTopRightOnSquare,
		UserGroup,
		ViewColumns,
		BarsArrowDown,
		Language,
		CommandLine,
		ShieldCheck
	} from 'svelte-heros-v2';
	import Button from '$lib/Button.svelte';
</script>

<svelte:head>
	<title>Photon</title>
</svelte:head>

<section class="relative z-0 flex h-screen items-center justify-center px-4 py-8 sm:p-16">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		id="mesh-gradient"
		viewBox="0 0 1000 500"
		class="absolute inset-0 -z-10 h-full w-full opacity-20"
		preserveAspectRatio="xMinYMid slice"
	>
		<defs>
			<filter id="blur" filterUnits="userSpaceOnUse" x="0" y="0">
				<feGaussianBlur stdDeviation="100" />
			</filter>
		</defs>
		<g id="swatches" width="1000" height="500" filter="url(#blur)">
			<rect x="200" y="40" width="700" height="410" fill="oklch(0.7 0.1653 193.24)" />
			<rect x="600" y="-7" width="579" height="429" fill="oklch(0.652 0.267 355.3)" />
			<rect x="-126" y="155" width="588" height="588" fill="oklch(0.493 0.229 304.2)" />
		</g>
	</svg>

	<heading
		class={[
			'prose prose-xl prose-h1:font-medium prose-h1:font-display prose-zinc prose-invert text-center',
			'w-full space-y-4'
		]}
	>
		<h1 class="font-display">
			<img
				width={48}
				height={48}
				alt=""
				src={logo}
				class="not-prose inline h-15 align-top lg:w-15"
			/>
			Photon is your portal to the
			<span class="become-glow">fediverse.</span>
		</h1>
		<!-- <p class="max-w-xl text-xl font-normal">Photon makes truly free social platforms accessible.</p> -->
		<div class="not-prose mx-auto flex w-max gap-4">
			<Button color="primary" rounding="pill" href="https://phtn.app" target="_blank" size="lg">
				Try Photon
				<ArrowTopRightOnSquare variation="micro" size="18" />
			</Button>
			<Button color="secondary" rounding="pill" href="#more" size="lg">Learn more</Button>
		</div>
	</heading>
</section>
<section
	class={[
		'prose prose-zinc prose-invert prose-xl prose-h1:font-medium prose-h1:font-display',
		'mx-auto w-full max-w-7xl gap-4 p-8 md:p-16 xl:p-24',
		'border-t border-zinc-800'
	]}
>
	<h1 id="more" class="text-center md:text-left">Making the switch easier</h1>
	<div class="flex w-full flex-col gap-4 md:flex-row-reverse">
		<div class="not-prose relative flex-1 border border-zinc-800">
			<div class="absolute -top-4 -left-4 h-4 w-4 border-r border-b border-zinc-800"></div>
			<div class="absolute -bottom-4 -left-4 h-4 w-4 border-t border-r border-zinc-800"></div>

			<div class="absolute -top-4 -right-4 h-4 w-4 border-b border-l border-zinc-800"></div>
			<div class="absolute -right-4 -bottom-4 h-4 w-4 border-t border-l border-zinc-800"></div>

			<enhanced:img src="./photon.webp" alt="A screenshot of the photon main interface" />
		</div>
		<div class="prose-p:max-w-xl flex-1 text-xl">
			<p>
				The fediverse is a truly free, decentralized way to access social media. However, many
				potential users are deterred by the complexity of its design and interfaces.
			</p>
			<p></p>
			<p class="text-2xl font-medium">Photon aims to fix that.</p>
			<p>
				It is thoughtfully designed such that every action and flow is obvious, while being powerful
				for advanced users.
			</p>
		</div>
	</div>
</section>
<section
	class={[
		'prose prose-zinc prose-invert prose-xl prose-h1:font-medium prose-h1:font-display',
		'mx-auto w-full max-w-7xl gap-4 p-8 md:p-16 xl:p-24',
		'border-t border-zinc-800',
		''
	]}
>
	<h1 id="features" class="text-center md:text-left">Features where you need them</h1>
	<p>Photon supports almost all available Lemmy features, with even more custom ones.</p>

	{#snippet feature(
		title: string,
		desc: string,
		link?: { label: string; href: string },
		icon?: Component
	)}
		<div
			class="not-prose odd:bg-zinc-925 flex flex-col space-y-2 p-4"
			style="box-shadow: 0 0 0 1px var(--color-zinc-800);"
		>
			{#if icon}
				<svelte:component this={icon} size="28" />
			{/if}
			<div class="text-lg font-medium text-zinc-50">{title}</div>
			<div class="text-base text-zinc-300">{desc}</div>
			{#if link}
				<a href={link.href} class="w-max font-mono text-sm hover:underline">{link.label}</a>
			{/if}
		</div>
	{/snippet}

	<div
		class="relative grid grid-cols-1 border border-zinc-800 sm:grid-cols-2
		lg:grid-cols-3"
	>
		<div class="absolute -top-4 -left-4 h-4 w-4 border-r border-b border-zinc-800"></div>
		<div class="absolute -bottom-4 -left-4 h-4 w-4 border-t border-r border-zinc-800"></div>
		<div class="absolute -top-4 -right-4 h-4 w-4 border-b border-l border-zinc-800"></div>
		<div class="absolute -right-4 -bottom-4 h-4 w-4 border-t border-l border-zinc-800"></div>

		{@render feature(
			'Multiple accounts',
			'Log into multiple accounts across servers, and swap between them with a single click.',
			{
				href: 'https://phtn.app/accounts',
				label: '/accounts'
			},
			UserGroup
		)}
		{@render feature(
			'Cozy & compact view',
			'Customize the look of your posts, from an easy thumbnail view to a compact list style.',
			{
				href: 'https://phtn.app/settings',
				label: '/settings'
			},
			ViewColumns
		)}
		{@render feature(
			'Infinite scroll',
			"Continuously load new posts without having to click 'next'. (Optionally)",
			{
				href: 'https://phtn.app/settings',
				label: '/settings'
			},
			BarsArrowDown
		)}
		{@render feature(
			'Multi-language support',
			'With community provided translations, you can switch between 18 available languages',
			{
				href: 'https://weblate.xylight.dev',
				label: 'weblate.xylight.dev'
			},
			Language
		)}
		{@render feature(
			'Command palette',
			'Switch between pages and change settings with ⌘P or /.',
			{
				href: 'https://phtn.app',
				label: '/'
			},
			CommandLine
		)}
		{@render feature(
			'Advanced moderation',
			'Batch actions on reports in the queue, notify users when they violate rules, and more',
			{
				href: 'https://phtn.app/moderation',
				label: '/moderation'
			},
			ShieldCheck
		)}
	</div>
</section>
