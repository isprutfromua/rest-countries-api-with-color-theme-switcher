import { defineConfig } from 'windicss/helpers';
import defaultTheme from 'windicss/defaultTheme';

export default defineConfig({
	attributify: true,
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['NunitoSans', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			fontSize: {},
			colors: {
				blue: {
					8: 'hsl(200, 15%, 8%)',
					17: 'hsl(209, 23%, 17%)',
					22: 'hsl(209, 23%, 22%)'
				},
				gray: {
					52: 'hsl(0, 0%, 52%)',
					77: 'hsl(0, 0%, 77%)',
					98: 'hsl(0, 0%, 98%)'
				}
			},
			container: {
				screens: {
					xl: '1280px'
				}
			}
		}
	},
	shortcuts: {}
});
