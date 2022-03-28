import adapter from '@sveltejs/adapter-auto';
import { windi } from 'svelte-windicss-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		windi({
			configPath: 'windi.config.js'
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
