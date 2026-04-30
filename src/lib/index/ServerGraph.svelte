<script lang="ts">
	const instances = [
		'lemmy.world',
		'sh.itjust.works',
		'lemmy.ml',
		'lemmy.zip',
		'lemmy.dbzer0.com',
		'lemmy.ca',
		'feddit.org',
		'programming.dev',
		'lemmy.blahaj.zone',
		'discuss.tchncs.de',
		'sopuli.xyz',
		'beehaw.org',
		'feddit.uk',
		'infosec.pub',
		'lemmy.today',
		'aussie.zone',
		'reddthat.com',
		'lemmy.sdf.org',
		'feddit.nl',
		'pawb.social',
		'jlai.lu',
		'feddit.dk',
		'mander.xyz',
		'lemmy.wtf',
		'lemmings.world',
		'feddit.it',
		'startrek.website',
		'ani.social',
		'szmer.info',
		'leminal.space'
	];

	const colors = ['#ff5555', '#ffff55', '#55ffff', '#5555ff', '#55ff55'];

	let { width, height } = $props();

	let dots: { x: number; y: number; name: string; color: string }[] = instances.map((_, index) => ({
		x: Math.random() * width - width / 4,
		y: Math.random() * height - height / 4,
		name: instances[index],
		color: colors[index % colors.length]
	}));
</script>

<div class="container" aria-hidden="true">
	<div class="dots-radius" style="width: 100%; height: 100%;">
		<svg class="h-full w-full">
			<polyline
				points={dots.map((dot) => `${dot.x},${dot.y}`).join(' ') + ` ${dots[0].x},${dots[0].y}`}
				style="fill:none;stroke:var(--color-zinc-800);stroke-dasharray: 4;"
			></polyline>
		</svg>
		{#each dots as dot}
			<div
				class="dot"
				style="top: {dot.y}px; left: {dot.x}px; background-color: {dot.color}; --dot-color: {dot.color}"
			>
				<div class="dot-label relative h-full w-full">
					<div class="dot-name absolute">
						{dot.name}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-image:
			linear-gradient(to right, var(--color-zinc-800) 1px, transparent 1px),
			linear-gradient(to bottom, var(--color-zinc-800) 1px, transparent 1px);
		background-size: 100px 100px;
		background-position: -1px;
	}

	.dots-radius {
		position: relative;
	}

	.dot {
		position: absolute;
		width: 6px;
		height: 6px;
		border-radius: 9999px;
		background-color: var(--color-zinc-800);
		transform: translate(-50%, -50%);
	}

	.dot-label {
		font-size: var(--text-xs);
		font-family: monospace;
		left: 6px;
		color: var(--color-zinc-300);
		user-select: none;
	}
</style>
