import { writable } from 'svelte/store';
import { browser } from '$app/env';

let theme;

if (browser) {
	const storedTheme = localStorage.getItem('color-theme');
	theme = writable(storedTheme);

	theme.subscribe((value) => {
		if (value === 'dark') {
			localStorage.setItem('color-theme', 'dark');
			document.documentElement.classList.add('dark');
		} else {
			localStorage.setItem('color-theme', 'light');
			document.documentElement.classList.remove('dark');
		}
	});
}

export default theme;
