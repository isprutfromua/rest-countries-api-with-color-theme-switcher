<script>
	import RegionSelect from '../lib/RegionSelect.svelte';

	import Search from '$lib/Search.svelte';

	import Country from '$lib/Country.svelte';
	import countries from '../stores/countries';
	import { query, region } from '../stores/filters';
	import { fly, fade } from 'svelte/transition';

	let menuVisible = false;

	async function getCountries() {
		if ($countries.length) {
			return new Promise((resolve) => {
				resolve($countries);
			});
		}

		const res = await fetch('https://restcountries.com/v3.1/all');
		const data = await res.json();

		if (res.ok) {
			countries.set(data);
			return data;
		} else {
			throw new Error(data);
		}
	}

	$: currentRegion = $region.toLowerCase();

	$: searchValue = $query ? $query.toLowerCase() : '';
	$: filteredCountries = getCountries().then((r) => {
		return r.filter(({ name, region }) => {
			let countryName = name.common.toLowerCase();
			let countryRegion = region.toLowerCase();

			if (currentRegion) {
				return (
					countryName.includes(searchValue) && countryRegion == currentRegion
				);
			} else {
				return countryName.includes(searchValue);
			}
		});
	});
</script>

<svelte:head>
	<title>Where in the world?</title>
</svelte:head>

<div
	class="container flex flex-col md:(items-center flex-row justify-between) ">
	<Search />

	<div class="mt-10 select relative md:mt-0">
		<RegionSelect />
	</div>
</div>

<ul
	class="container flex flex-col flex-wrap my-7 px-14 gap-y-10 countries justify-start md:flex-row md:mx-auto md:my-12 md:gap-19 xl:grid xl:px-0 xl:grid-cols-4">
	{#await filteredCountries then countries}
		{#each countries as country}
			<li in:fade>
				<Country {country} />
			</li>
		{:else}
			<p class="font-extrabold text-3xl">No countries</p>
		{/each}
	{/await}
</ul>
