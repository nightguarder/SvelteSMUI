<script>
	import { resolve } from '$app/paths';
</script>

<nav>
	<a href={resolve('/')}>Home</a>
	<a href={resolve('/about')}>About</a>
	<a href={resolve('/frontmatter')}>Frontmatter</a>
</nav>

<h4 class="mdc-typography--headline4">Welcome to SvelteKit + SMUI</h4>

<p class="mdc-typography--body-1">
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
</p>
<p class="mdc-typography--body-1">
	Visit <a href="https://sveltematerialui.com/">sveltematerialui.com</a>
	for Svelte Material UI documentation.
</p>
<p class="mdc-typography--body-1">
	Check out the examples: <a href={resolve('/examples')}>{resolve('/examples')}</a>
</p>
