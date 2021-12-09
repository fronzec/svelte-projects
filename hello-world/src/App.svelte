<script>
	export let name;
	export let lastName;
	let svelteLogo = 'https://arepa.s3.amazonaws.com/svelte-logo.png';
</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<p>SWE</p>
	<img src="{svelteLogo}" alt="Svelte">
</main>

<style>
	/*global styles must be on main component*/
	:global(body) {
		background-color: #d7d7c7;
		color: aqua;
	}

	/*global variables*/
	:global(:root) {
		--theme-color: purple;
	}

	/*applying global variable*/
	p {
		color: var(--theme-color);
		font-size: 22px;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	main img {
		width: 30%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
