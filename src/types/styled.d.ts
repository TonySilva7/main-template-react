// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			accent: string;
			error: string;
			warning: string;
			info: string;
			success: string;
			background: string;
			surface: string;
			text: string;
			// onPrimary: string;
			// onSecondary: string;
			// onAccent: string;
			// onError: string;
			// onWarning: string;
			// onInfo: string;
			// onSuccess: string;
			// onBackground: string;
			// onSurface: string;
			// onText: string;
		};
		spacing: {
			none: number;
			extraTight: number;
			tight: number;
			snug: number;
			regular: number;
			loose: number;
			extraLoose: number;
		};
		borderRadii: {
			none: number;
			extraSmall: number;
			small: number;
			regular: number;
			large: number;
			extraLarge: number;
		};
		breakpoints: {
			mobile: number;
			phablet: number;
			tablet: number;
			desktop: number;
			hd: number;
		};
		font: {
			sizes: {
				xsmall: number;
				small: number;
				medium: number;
				large: number;
				xlarge: number;
			};
			weights: {
				light: number;
				regular: number;
				medium: number;
				bold: number;
			};
		};
	}
}
