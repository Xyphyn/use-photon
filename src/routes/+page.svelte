<script lang="ts">
	import Button from '$lib/Button.svelte';
	import EndCard from '$lib/index/EndCard.svelte';
	import Feature from '$lib/index/Feature.svelte';
	import ServerGraph from '$lib/index/ServerGraph.svelte';
	import type { Component } from 'svelte';
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
	import MainSection from '../lib/index/MainSection.svelte';
	import ImageConvenientDark from './convenient-dark.png?enhanced';
	import ImageFeedDark from './feed-dark.png?enhanced';
	import ImageThemes from './themes.png?enhanced';

	const features: {
		title: string;
		body: string;
		image: typeof ImageThemes;
		examples?: { icon: Component<any>; text: string; href: string }[];
	}[] = [
		{
			title: 'Decentralized media made accessible.',
			body: `Photon's primary goal is to provide a modern and fast frontend for decentralized social platforms. With a familiar and intuitive interface, Photon helps grow these platforms.`,
			image: ImageFeedDark
		},
		{
			title: 'Convenient and feature-rich.',
			body: 'Features to improve your browsing experience are placed where and when you need them.',
			image: ImageConvenientDark,
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
		},
		{
			title: 'Customizable.',
			body: `There are plentry of options to tune to your liking.`,
			image: ImageThemes,
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
		}
	];
</script>

<svelte:head>
	<title>Photon</title>
</svelte:head>

<section
	class="max-w-8xl header-section relative z-0 mx-auto grid
 min-h-[36rem] grid-cols-1 place-items-center justify-items-center divide-x divide-y divide-zinc-800 *:h-full lg:grid-cols-2"
>
	<!-- <div class="glow pointer-events-none"></div> -->

	<heading class={['flex flex-col space-y-4 pt-12 pr-12 pl-12']}>
		<h1
			class="font-display text-center text-5xl leading-[1] tracking-tighter md:text-left md:text-7xl md:leading-[1.2]"
		>
			A portal to the
			<span
				class="bg-gradient-to-r from-zinc-900 to-indigo-500 bg-clip-text text-transparent dark:from-zinc-50 dark:to-indigo-400"
			>
				fediverse.
			</span>
		</h1>
		<p
			class=" max-w-2xl text-center text-xl leading-[1.5] text-balance text-zinc-600 md:text-left dark:text-zinc-400"
		>
			Photon connects you to the fediverse with a fast and convenient interface that doesn't
			compromise on features.
		</p>
		<Button
			transition={false}
			color="secondary"
			rounding="none"
			href="https://phtn.app"
			target="_blank"
			size="xl"
			class="-mx-12 mt-auto py-2 text-lg! font-medium"
		>
			<div class="mr-auto">Try Photon</div>
			{#snippet suffix()}
				<ArrowTopRightOnSquare size="20" variation="mini" />
			{/snippet}
		</Button>
	</heading>
	<div class="h-full w-full max-lg:min-h-[24rem]">
		<ServerGraph width={1000} height={1000} />
	</div>
</section>
{#snippet h2(id: string, text: string)}
	<h2
		{id}
		class={[
			'mt-2 bg-gradient-to-r bg-clip-text font-normal! text-transparent',
			'from-zinc-400 via-zinc-900 to-zinc-400',
			'dark:from-zinc-500 dark:via-zinc-50 dark:to-zinc-500'
		]}
	>
		{text}
	</h2>
{/snippet}
<MainSection>
	<heading class="relative w-full md:col-span-2">
		{@render h2('more', 'A friendly interface.')}
		<p class="mx-auto max-w-xl text-center">
			Photon is designed to take away the clutter and complexity of the fediverse, while being
			feature-rich and well-designed.
		</p>
	</heading>
	<div class="not-prose p-6 md:col-span-2">
		<div
			class="mx-auto hidden w-full max-w-5xl overflow-hidden rounded-xl border border-slate-200 shadow-xl dark:block dark:border-zinc-800"
		>
			<enhanced:img
				class="h-auto w-full"
				src="./dark-hero.png?w=1400;800;640;400"
				sizes="min(1280px,100vw)"
			/>
		</div>
	</div>

	<ol
		class={[
			'prose-2xl prose-p:text-lg feature-list relative contents w-full max-w-7xl flex-col gap-16'
		]}
	>
		{#each features as feature, index}
			<Feature title={feature.title} body={feature.body} examples={feature.examples} {index}>
				{#snippet img()}
					<enhanced:img
						src={feature.image}
						class="h-auto w-full"
						sizes="min(600px,100vw)"
						loading="lazy"
					/>
				{/snippet}
			</Feature>
		{/each}
	</ol>
</MainSection>

<hr class="border-zinc-100 dark:border-zinc-800" />
<MainSection>
	<heading class="max-w-3xl">
		<h2
			id="more"
			class={[
				'mt-2 bg-gradient-to-r bg-clip-text text-left! text-transparent ',
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

	<div class="not-prose grid w-full gap-0 p-0! lg:grid-cols-2">
		<EndCard
			name="Matrix"
			description="Talk and chat with other members about anything."
			url="https://matrix.to/#/#photon-lemmy-general:matrix.org"
		/>
		<EndCard
			name="GitHub"
			description="Browse the source code and changelogs, or report bugs."
			url="https://github.com/Xyphyn/photon"
		/>
		<EndCard
			name="Lemmy"
			description="Discuss and browse posts about Photon."
			url="https://lemdro.id/c/photon"
		/>
		<EndCard
			name="Weblate"
			description="Help localize Photon into more languages."
			url="https://weblate.xylight.dev/projects/photon/test/"
		/>
		<EndCard
			name="Donate"
			description="Support the development and future of Photon."
			url="https://buymeacoffee.com/xylight"
		/>
	</div>
</MainSection>

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

	.header-section {
		box-shadow: 0px 0px 0px 1px var(--color-zinc-800);
	}

	.feature-list {
		:global(& > li > div) {
			&:not(.ignore-grid-padding) {
				padding: calc(var(--spacing) * 12);
			}
			height: 100%;
			box-shadow: 0px 0px 0px 1px var(--color-zinc-800);
		}
	}

	enhanced\:img {
		max-width: 100% !important;
		min-width: 0 !important;
		width: 100%;
	}
</style>
