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

<section class="z-0 flex h-[50vh] items-center justify-center px-4 py-8 sm:p-16">
	<div class="pointer-events-none absolute top-0 -z-10 w-full overflow-hidden">
		<div class="absolute -inset-50 z-10 backdrop-blur-3xl"></div>
		<svg
			class="pointer-events-none h-auto w-full opacity-30 dark:opacity-20"
			width="1200"
			height="500"
			viewBox="50 75 1171 241"
			fill="none"
		>
			<defs>
				<filter id="blur" x="0" y="-311" width="1170" height="550" filterUnits="userSpaceOnUse">
					<feGaussianBlur stdDeviation="60" />
				</filter>
				<linearGradient id="grad1" x1="568" y1="1" x2="1029" y2="65" gradientUnits="userSpaceOnUse">
					<stop stop-color="oklch(0.47 0.32 264)" />
					<stop offset="1" stop-color="oklch(0.84 0.21 170)" />
				</linearGradient>
				<linearGradient
					id="grad2"
					x1="155"
					y1="-11"
					x2="512"
					y2="-162"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="oklch(0.83 0.16 73)" />
					<stop offset="0.5" stop-color="oklch(0.64 0.29 359)" />
					<stop offset="1" stop-color="oklch(0.51 0.30 284)" />
				</linearGradient>
			</defs>
			<g>
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
				class="bg-gradient-to-r from-zinc-900 to-indigo-500 bg-clip-text text-transparent dark:from-zinc-50 dark:to-indigo-400"
			>
				to the fediverse.
			</span>
		</h1>
		<p class="text-balance">
			Photon takes the decentralized experience of the fediverse and makes it actually nice to use.
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
<hr class="border-zinc-200 dark:border-zinc-800" />
<section
	class={[
		'relative z-0 mx-auto flex w-full max-w-full flex-col items-center justify-center px-4 py-8 sm:p-16',
		'prose prose-zinc dark:prose-invert prose-xl prose-ol:p-0 prose-li:px-0',
		'prose-headings:font-medium prose-headings:font-display text-center text-balance'
	]}
>
	<heading class="max-w-3xl">
		<h2
			id="more"
			class={[
				'mt-2 bg-gradient-to-r bg-clip-text text-4xl text-transparent',
				'from-zinc-400 via-zinc-900 to-zinc-400',
				'dark:from-zinc-500 dark:via-zinc-50 dark:to-zinc-500'
			]}
		>
			A concise interface.
		</h2>
		<p>
			Photon is designed to take away the clutter and complexity of the fediverse—without
			sacrificing features.
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
		examples?: { icon: any; text: string }[];
	})}
		<li
			class="flex w-full flex-col items-center gap-4 text-left lg:flex-row lg:gap-12 even:lg:flex-row-reverse xl:gap-20"
		>
			<div class="order-2 w-full flex-1 text-wrap xl:order-1">
				<h3
					class="w-max max-w-full bg-gradient-to-l from-zinc-900 to-zinc-500 bg-clip-text text-transparent dark:from-indigo-200 dark:to-zinc-300"
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
								<div
									class={[
										'rounded-xl border p-2',
										'border-zinc-200 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-900'
									]}
								>
									<Icon variation="mini" size="20" />
								</div>
								{ex.text}
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div
				class={[
					'font-display order-1 grid h-10 w-10 place-items-center rounded-3xl text-xl lg:order-2',
					'border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'
				]}
			>
				{index}
			</div>
			<div
				class={[
					'relative block h-full w-full flex-1 rounded-xl',
					'not-prose overflow-hidden border border-zinc-200 shadow-lg dark:border-zinc-800',
					'order-3'
				]}
			>
				{@render img?.()}
			</div>
		</li>
	{/snippet}

	<ol
		class={[
			'prose-lg relative flex w-full max-w-7xl flex-col gap-16',
			'before:absolute before:h-full before:border-l before:border-slate-200 before:xl:block before:dark:border-zinc-800',
			'before:left-1/2 before:-z-10 before:hidden before:border-dashed'
		]}
	>
		{#snippet img1()}
			<div class="block dark:hidden">
				<enhanced:img src="./feed-light.png?w=600,480" loading="eager" />
			</div>
			<div class="hidden dark:block">
				<enhanced:img src="./feed-dark.png?w=600,480" loading="eager" />
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
				<enhanced:img src="./convenient.png?w=600,480" loading="eager" />
			</div>
			<div class="hidden dark:block">
				<enhanced:img src="./convenient-dark.png?w=600,480" loading="eager" />
			</div>
		{/snippet}
		{@render feature({
			title: 'Convenient and powerful',
			body: 'lorem ipsum dolor sit amet',
			index: 2,
			img: img2,
			examples: [
				{
					icon: UserGroup,
					text: 'Switch between accounts across servers'
				},
				{
					icon: Language,
					text: 'Support for 19 languages'
				},
				{
					icon: ShieldCheck,
					text: 'Advanced moderation tools'
				},
				{
					icon: VideoCamera,
					text: 'Inline media embeds'
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
					text: 'Custom themes'
				},
				{
					icon: ViewColumns,
					text: 'Cozy and compact modes'
				},
				{
					icon: BarsArrowDown,
					text: 'Infinite scroll'
				}
			]
		})}
	</ol>

	<!-- <div class="absolute inset-0 -z-10 mx-auto my-auto h-96 w-96 bg-zinc-600/20 blur-3xl"></div> -->
	<!-- {#snippet thing(
		title: string,
		main: string,
		description: string[],
		span: 'none' | 'vertical' | 'horizontal',
		extended?: Snippet
	)}
		<div
			class={[
				span == 'horizontal' && 'col-span-2',
				'group flex flex-row gap-4 rounded-xl',
				' from-zinc-900 to-zinc-800'
			]}
		>
			<div class="flex-1 space-y-4">
				<p class="font-display text-lg text-slate-700 dark:text-zinc-300">{title}</p>
				<h2
					class={[
						'font-display bg-gradient-to-l from-zinc-400 to-slate-900 bg-clip-text text-3xl text-transparent',
						'group-first:from-purple-400 dark:from-zinc-400 dark:to-zinc-50'
					]}
				>
					{main}
				</h2>
				{#each description as p}
					<p
						class="dark:text-zinc-lg max-w-md text-lg font-normal text-slate-600 dark:text-zinc-400"
					>
						{p}
					</p>
				{/each}
			</div>
			{#if extended}
				<div class="flex-1 overflow-hidden rounded-2xl">
					{@render extended()}
				</div>
			{/if}
		</div>
	{/snippet}

	<div class="flex w-full flex-col gap-24">
		{#snippet photonImg()}
			<enhanced:img src="./photon-dark.png" class="" />
		{/snippet}
		{@render thing(
			'Intuitive interface',
			'The fediverse, made approachable',
			['Photon has an approachable, customizable design for normal and power users alike.'],
			'horizontal',
			photonImg
		)}
		{@render thing(
			'Lorem ipsum',
			'dolor sit amet',
			[
				'consectetur adipisicing elit. At, aut architecto. Optio impedit laborum.',
				'Dolorum, quae placeat. Officia nisi quia repellendus delectus magnam.'
			],
			'none'
		)}
		{@render thing(
			'Lorem ipsum',
			'dolor sit amet',
			[
				'consectetur adipisicing elit. At, aut architecto. Optio impedit laborum.',
				'Dolorum, quae placeat. Officia nisi quia repellendus delectus magnam.'
			],
			'none'
		)}
		{@render thing(
			'Lorem ipsum',
			'dolor sit amet',
			[
				'consectetur adipisicing elit. At, aut architecto. Optio impedit laborum.',
				'Dolorum, quae placeat. Officia nisi quia repellendus delectus magnam.'
			],
			'horizontal'
		)}
	</div> -->
</section>
