<script lang="ts">
	export let country = {};
</script>

<div class="bg-$bg-color rounded-md flex-grow-0 shadow shadow-md ">
	<figure class="m-0">
		<img src={country.flags.png} alt="" class="h-40 w-full" />
		<figcaption class="p-6">
			<a
				href="/countries/{country.name.common.toLowerCase()}"
				class="font-extrabold text-lg mb-4">{country.name.common}</a>
			<p>
				<span class="font-semibold text-sm">Population:</span>
				<span class="font-light text-sm">{country.population}</span>
			</p>
			<p>
				<span class="font-semibold text-sm">Region:</span>
				<span class="font-light text-sm">{country.region}</span>
			</p>
			<p>
				<span class="font-semibold text-sm">Capital:</span>
				<span class="font-light text-sm">{country.capital}</span>
			</p>
		</figcaption>
	</figure>
</div>
