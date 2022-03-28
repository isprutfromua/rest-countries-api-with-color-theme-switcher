import { writable } from 'svelte/store';
import { browser } from '$app/env';

let countries;

if (browser) {
	let storedCountries = JSON.parse(localStorage.getItem('countries'));

	countries = writable(storedCountries === null ? [] : storedCountries);

	countries.subscribe((value) => {
		localStorage.setItem('countries', JSON.stringify(value));
	});
}

export default countries;
