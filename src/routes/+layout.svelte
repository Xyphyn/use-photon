<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="h-full min-h-screen w-full font-sans">
	{@render children()}
</main>
<footer class="flex w-full flex-row gap-4 p-8 text-zinc-400">
	<div>
		© 2025 <a href="https://xylight.dev">Xylight</a>
		• AGPL 3.0
	</div>
	<div class="flex-1"></div>
	<a href="mailto:photon@phtn.app">Contact</a>
	<a href="https://github.com/Xyphyn/photon">GitHub</a>
	<a href="https://matrix.to/#/#photon-lemmy-general:matrix.org">Matrix Room</a>
</footer>

<style>
	footer a:hover {
		text-decoration-line: underline;
	}
</style>
