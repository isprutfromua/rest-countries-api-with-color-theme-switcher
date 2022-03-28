<script>
	import { region } from '../stores/filters';
	import { fly, fade } from 'svelte/transition';

	let menuVisible = false;

	$: currentRegion = $region.toLowerCase();
</script>

<button
	class="bg-$bg-color  rounded-md flex outline-transparent shadow shadow-lg text-xs py-3 px-6 w-50 items-center justify-between md:py-4 "
	on:click={() => {
		menuVisible = !menuVisible;
	}}>
	<span>{currentRegion ? `Region: ${currentRegion}` : 'Filter by region'}</span>
	<svg
		width="10"
		height="10"
		viewBox="0 0 10 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
			fill="currentColor" />
	</svg>
</button>
{#if menuVisible}
	<div
		class="bg-$bg-color rounded-md flex flex-col top-full shadow shadow-lg text-xs py-4 px-6 transform  right-0 w-50 gap-y-2 translate-y-1 absolute md:py-4"
		in:fly={{ y: 8, opacity: 0 }}
		out:fly={{ y: 8 }}>
		<button
			class="outline-transparent text-left"
			on:click={() => (menuVisible = !menuVisible)}
			on:click={() => region.set('')}>All regions</button>
		<button
			class="outline-transparent text-left"
			on:click={() => (menuVisible = !menuVisible)}
			on:click={() => region.set('Africa')}>Africa</button>
		<button
			class="outline-transparent text-left"
			on:click={() => (menuVisible = !menuVisible)}
			on:click={() => region.set('Americas')}>Americas</button>
		<button
			class="outline-transparent text-left"
			on:click={() => (menuVisible = !menuVisible)}
			on:click={() => region.set('Asia')}>Asia</button>
		<button
			class="outline-transparent text-left"
			on:click={() => (menuVisible = !menuVisible)}
			on:click={() => region.set('Europe')}>Europe</button>
		<button
			class="outline-transparent text-left"
			on:click={() => (menuVisible = !menuVisible)}
			on:click={() => region.set('Oceania')}>Oceania</button>
	</div>
{/if}
