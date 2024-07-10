import { component$ } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { RouterHead } from "~/components/router-head";
import {
	rootThemeAttribute,
	selectedThemeCookie,
} from "~/components/theme-switcher/constants";
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
			<body
				lang="en"
				class={css({ background: "background.page", color: "text.body" })}
			>
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: needed before page is rendered to set theme on client properly
					dangerouslySetInnerHTML={`
(() => {
	const theme = localStorage.getItem("${selectedThemeCookie}");
	if (["light", "dark"].includes(theme)) {
		document.body.setAttribute("${rootThemeAttribute}", theme);
	}
})()
					`}
				/>
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});
