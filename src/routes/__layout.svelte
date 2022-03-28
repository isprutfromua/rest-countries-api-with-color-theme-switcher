<script>
	import Navigation from '$lib/Navigation.svelte';
</script>

<Navigation />

<main
	class="container flex flex-col font-$text-color mt-6 px-4 md:(mx-auto mt-12) xl:px-0 ">
	<slot />
</main>

<style windi:preflights:global windi:safelist:global>
	:global(html) {
		--text-color: hsl(209, 23%, 17%);
		--bg-color: rgb(255, 255, 255);
		--bg-body-color: rgba(255, 255, 255, 0.98);
	}

	:global(html.dark) {
		--text-color: rgb(255, 255, 255);
		--bg-color: hsl(209, 23%, 22%);
		--bg-body-color: hsl(209, 23%, 17%);
	}

	:global(body) {
		background-color: var(--bg-body-color);
		color: var(--text-color);
	}
	@media screen and (min-width: 960px) {
		:global(html) {
			overflow-x: hidden;
			margin-right: calc(-1 * (100vw - 100%));
		}

		:global(body *) {
			transition-property: background-color;
			transition-duration: 300ms;
			transition-timing-function: linear;
		}
	}
</style>
