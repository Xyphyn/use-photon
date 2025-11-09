<script lang="ts">
	import Button from '$lib/Button.svelte';
	import EndCard from '$lib/index/EndCard.svelte';
	import Feature from '$lib/index/Feature.svelte';
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
</script>

<svelte:head>
	<title>Photon</title>
</svelte:head>

<section class="section-dots relative z-0 flex h-[calc(100vh-8rem)] items-center px-4 py-8 sm:p-16">
	<!-- <div class="glow pointer-events-none"></div> -->

	<heading class={['flex w-full flex-col items-center justify-center space-y-8']}>
		<span class="rounded-2xl bg-zinc-200/50 px-4 py-2 font-mono text-base dark:bg-zinc-800/50">
			v2.1.1
		</span>
		<h1 class="font-display text-center text-7xl leading-[1.2] tracking-tighter">
			A portal to the
			<span
				class="bg-gradient-to-r from-zinc-900 to-indigo-500 bg-clip-text text-transparent dark:from-zinc-50 dark:to-indigo-400"
			>
				fediverse.
			</span>
		</h1>
		<p
			class=" max-w-2xl text-center text-xl leading-[1.5] text-balance text-zinc-600 dark:text-zinc-400"
		>
			Photon connects you to the fediverse with a fast and convenient interface that doesn't
			compromise on features.
		</p>
		<div class="not-prose inline-flex w-max gap-4">
			<Button
				transition={false}
				color="secondary"
				rounding="2xl"
				href="https://phtn.app"
				target="_blank"
				size="custom"
				class="px-4 py-2.5 text-lg font-medium"
			>
				Try Photon
				<ArrowTopRightOnSquare variation="mini" size="18" />
			</Button>
		</div>
	</heading>
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
<hr
	class="h-px border-0 bg-gradient-to-r from-zinc-50 via-zinc-300 to-zinc-50 dark:from-zinc-950 dark:via-zinc-700 dark:to-zinc-950"
/>
<MainSection>
	<heading class="max-w-3xl">
		{@render h2('more', 'A concise interface.')}
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
		<Feature
			title="Your feed, simplified."
			body="The posts on your feed are designed by default to maximize information density and minimize clutter―and if that's not what you want, the interface is customizable."
			index={1}
			img={img1}
		/>
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
		<Feature
			title="Convenient and powerful"
			body="Features to improve your browsing experience are placed where and when you need them."
			index={2}
			img={img2}
			examples={[
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
			]}
		/>
		{#snippet img3()}
			<enhanced:img src="./themes.png?w=600,480" loading="lazy" />
		{/snippet}
		<Feature
			title="Customization without complexity"
			body="Photon has plenty of options to tweak and tune to your liking. Each setting is made easy to configure."
			index={3}
			img={img3}
			examples={[
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
			]}
		/>
	</ol>
</MainSection>

<hr class="border-zinc-100 dark:border-zinc-800" />
<MainSection>
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

	<div
		class="not-prose mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-8 text-center"
	>
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
</style>
