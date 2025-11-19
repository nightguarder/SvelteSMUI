<script lang="ts">
	import Button from '@smui/button';
	import Card from '@smui/card';
	import TextField from '@smui/textfield';

	let name = '';
	let greeted = false;
	const greet = () => {
		greeted = true;
	};
</script>

<svelte:head>
	<title>SMUI Examples</title>
</svelte:head>

<main>
	<h1>SMUI quick demo</h1>

	<section class="row">
		<Card class="demo">
			<div class="card-content">
				<h2>Interactive greeting</h2>
				<TextField bind:value={name} label="Your name" />
				<div class="actions">
					<!-- cast handler to any to avoid strict SMUI event typings in this template -->
					<Button variant="raised" on:click={greet as any}>Greet</Button>
				</div>
				{#if greeted}
					<p class="greeting">Hello {name || 'friend'} 👋</p>
				{/if}
			</div>
		</Card>

		<Card class="demo">
			<div class="card-content">
				<h2>Buttons</h2>
				<div class="btnrow">
					<Button>Default</Button>
					<Button variant="outlined">Outlined</Button>
					<Button variant="unelevated">Unelevated</Button>
				</div>
			</div>
		</Card>
	</section>

	<p class="note">
		This page uses SMUI components. See the project README for dependency/setup if you get import
		errors.
	</p>
</main>

<style>
	main {
		padding: 1rem;
	}
	.row {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.card-content {
		padding: 1rem;
	}
	.actions {
		margin-top: 0.5rem;
	}
	.btnrow :global(button) {
		margin-right: 0.5rem;
	}
	.greeting {
		margin-top: 0.75rem;
		font-weight: 600;
	}
	.note {
		margin-top: 1rem;
		color: var(--smui-secondary-text, #666);
	}
</style>
