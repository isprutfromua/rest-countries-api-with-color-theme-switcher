<script context="module">
	export const load = async ({ fetch, params }) => {
		const name = params.name;
		const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
		const countryData = await res.json();

		return {
			props: {
				countryData: countryData[0]
			}
		};
	};
</script>

<script>
	import { fade } from 'svelte/transition';
	export let countryData;
	let countryName = countryData.name.common;
</script>

<svelte:head>
	<title>Country: {countryName}</title>
</svelte:head>

<section in:fade>
	<a
		href="/"
		class="bg-$bg-color rounded-sm font-light shadow shadow-md text-sm py-1 px-6 gap-x-2 inline-flex self-start ">
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
				fill="currentColor" />
		</svg>

		<span>Back</span></a>

	<div class="container mt-16 items-center xl:flex xl:mt-20">
		<img
			src={countryData.flags.png}
			class="rounded-lg w-100 xl:mr-30 xl:max-w-140"
			alt={countryData.name.common} />
		<div class="mt-11 xl:mt-0">
			<h1 class="font-extrabold text-3xl">
				{countryData.name.common}
			</h1>

			<div
				class="flex flex-col flex-wrap my-4 mt-6 gap-4 gap-x-35 items-start lg:max-h-51 ">
				<p><b>Native Name</b>: {countryData.name.official}</p>
				<p><b>Population:</b> {countryData.population}</p>
				<p><b>Region</b>: {countryData.region}</p>
				<p><b>Sub Region</b>: {countryData.subregion}</p>
				<p><b>Capital</b>: {countryData.capital}</p>
				<p><b>Top Level Domain</b>: {countryData.tld[0]}</p>
				<p>
					<b>Currencies:</b>
					{#each Object.values(countryData.currencies) as c}
						<span
							class="bg-$bg-color rounded-sm font-light shadow shadow-md mr-2 text-sm py-1 px-6"
							>{c.name}</span>
					{/each}
				</p>
				<div>
					<b>Languages:</b>
					<p class="flex-wrap flex-row gap-1 inline-flex">
						{#each Object.values(countryData.languages) as l}
							<span
								class="bg-$bg-color rounded-sm font-light shadow shadow-md mr-2 text-sm py-1 px-6"
								>{l}</span>
						{/each}
					</p>
				</div>
			</div>
			{#if countryData.borders}
				<div class="flex flex-row mt-18 items-center">
					<h2 class="font-bold mr-4">Border countries:</h2>
					{#each countryData.borders as b}
						<span
							class="bg-$bg-color rounded-sm font-light shadow shadow-md mr-2 text-sm py-1 px-6"
							>{b}</span>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>
