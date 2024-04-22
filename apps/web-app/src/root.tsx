import { component$ } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import { css } from "~gen/pandacss/css";
import "./global.css";

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */

	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				{/* https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs */}
				<link rel="manifest" href="/manifest.webmanifest" />
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
				<link rel="icon" href="/icon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-icon.png" />
				<RouterHead />
				<ServiceWorkerRegister />
			</head>
			<body lang="en" class={css({ background: "background.page" })}>
				{/* put this before the HTML to ensure it blocks visibility */}
				<script
					type="text/javascript"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: necessary for setting up the color mode
					dangerouslySetInnerHTML={`
(function() {
	var defaultColorMode = 'light';
	function getStoredColorMode() {
		if (typeof window.localStorage === 'undefined') {
			return defaultColorMode;
		}
		var storedColorMode = localStorage.getItem('color-mode') ?? 'system';
		if (!['system', 'light', 'dark'].includes(storedColorMode)) {
			console.info('Invalid color mode stored:', storedColorMode);
			return undefined;
		}
		return storedColorMode;
	}

	function getColorMode() {
		if (typeof window.localStorage === 'undefined') {
			return defaultColorMode;
		}
		var storedColorMode = getStoredColorMode() || 'system';
		if (storedColorMode !== 'system') {
			return storedColorMode;
		}
		if (typeof window.matchMedia === 'undefined') {
			return defaultColorMode;
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	function setColorMode(mode) {
		document.documentElement.setAttribute('data-color-mode', mode);
	}

	setColorMode(getColorMode());

	if (typeof window.matchMedia !== 'undefined') {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
			if (getStoredColorMode() === 'system') {
				e.matches ? setColorMode('dark') : setColorMode('light');
			}
		});
	}
})();
			`}
				/>
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});
