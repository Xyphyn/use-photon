<script lang="ts">
	import type { Snippet } from 'svelte';
	import logo from './logo.svg';

	import {
		QuestionMarkCircle,
		ChevronUp,
		ChevronDown,
		ChatBubbleOvalLeftEllipsis,
		CpuChip,
		ArrowTopRightOnSquare
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
		class="absolute inset-0 -z-10 h-full w-full opacity-30"
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
		'p-8 md:p-16 xl:p-24'
	]}
>
	<h1 id="#more">About</h1>
	<div class="max-w-7xl text-xl">
		<p>The fediverse is a truly free, decentralized way to access social media.</p>
		<p>
			However, many potential users are deterred by the complexity of its design and interfaces.
		</p>
		<p class="text-2xl font-medium">Photon aims to fix that.</p>
	</div>
</section>

{#snippet fakePost(
	title: string,
	desc: string,
	community: string,
	user: string,
	embed?: boolean,
	icon?: Snippet
)}
	<div class="flex max-w-2xl flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
		<div class="flex flex-row gap-2">
			{#if icon}
				{@render icon?.()}
			{:else}
				<div class="grid h-10 w-10 place-items-center rounded-xl bg-red-300 p-2">
					<QuestionMarkCircle variation="mini" size="24" class="text-red-50" />
				</div>
			{/if}
			<div>
				<div class="text-sm font-medium text-zinc-300">{community}</div>
				<div class="text-sm text-zinc-400">{user}</div>
			</div>
		</div>
		{#if embed}
			<div class="space-y-2 rounded-2xl border border-inherit bg-zinc-900 p-4">
				<div class="text-xs text-zinc-400">{desc}</div>
				<div>{title}</div>
			</div>
		{:else}
			<p class="cursor-pointer text-lg font-medium hover:underline">{title}</p>
			<div class="space-y-2 text-zinc-400">
				{#each desc.split('\n') as p}
					<p>{p}</p>
				{/each}
			</div>
		{/if}
		<div class="flex h-8 flex-row gap-2 text-sm *:rounded-full *:border *:border-zinc-800 *:px-3">
			<div class="flex flex-row items-center gap-0.5">
				<ChevronUp variation="mini" size="20" />
				1.4K
				<div class="mx-2 h-full border-l border-inherit"></div>
				24
				<ChevronDown variation="mini" size="20" />
			</div>
			<div class="flex items-center gap-1">
				<ChatBubbleOvalLeftEllipsis size="20" />
				628
			</div>
		</div>
	</div>
{/snippet}

<!-- <section class="bg-zinc-925 overflow-x-hidden border-y border-zinc-800">
	<div class="animate-scroll flex w-full flex-row items-center gap-12 p-8">
		{#snippet posts()}
			{@render fakePost(
				'What is something really stupid you purchased that turned out far better than expected?',
				`I bought a piece of 1.5 inch stiff foam to try to fix a sag in a bed. It didn't work but having that thick piece of solid foam around has been a life saver.

Need something flat to put a laptop on? Throw it on the foam. Going to be doing something that requires you to be on your knees for a while? Get the foam!`,
				'Ask Lemmy',
				'RanchOnPancakes'
			)}
			{#snippet techIcon()}
				<div class="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/20">
					<CpuChip variation="micro" size="24" class="text-zinc-50" />
				</div>
			{/snippet}
			{@render fakePost(
				'Mastodon user numbers are soaring',
				`techcrunch.com`,
				'Technology',
				'adonis',
				true,
				techIcon
			)}
			{@render fakePost(
				'Mastodon user numbers are soaring',
				`techcrunch.com`,
				'Technology',
				'adonis',
				true,
				techIcon
			)}
		{/snippet}
		{@render posts()}
		{@render posts()}
	</div>
</section> -->

<style>
	@keyframes scroll {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-scroll {
		animation: scroll 20s linear infinite;
		width: 200%;
	}

	.animate-scroll > * {
		flex: 0 0 auto;
	}
</style>
