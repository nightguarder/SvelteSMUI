<script lang="ts">
	// Simple index for the examples
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Examples — SMUI Template</title>
</svelte:head>

<main>
	<h1>Template Examples</h1>
	<p>
		Quick examples that show how to use Svelte Material UI (SMUI) and mdsvex (Markdown + Svelte).
	</p>

	<ul>
		<li><a href={resolve('/examples/smui')}>SMUI examples (buttons, cards, text fields)</a></li>
		<li><a href={resolve('/examples/markdown')}>Markdown + mdsvex example</a></li>
	</ul>
</main>

<style>
	main {
		padding: 1rem;
	}
	ul {
		margin-top: 1rem;
	}
</style>
