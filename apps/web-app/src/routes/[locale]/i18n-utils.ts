import "@angular/localize/init";
import { loadTranslations } from "@angular/localize";
import { $, getLocale, useOnDocument, withLocale } from "@builder.io/qwik";
import type { RenderOptions } from "@builder.io/qwik/server";

// You must declare all your locales here
import EN from "../../locales/message.en.json";
import IT from "../../locales/message.it.json";

// Make sure it's obvious when the default locale was selected
const DEFAULT_LOCALE = "en";

/**
 * This file is left for the developer to customize to get the behavior they want for localization.
 */

/// Declare location where extra types will be stored.
const $localizeFn = $localize as unknown as {
	translations: Record<string, unknown>;
	translationsByLanguage: Map<string, Record<string, unknown>>;
};

/**
 * This solution uses the `@angular/localize` package for translations, however out of the box
 * `$localize` works with a single translation only. This code adds support for multiple locales
 * concurrently. It does this by intercepting the `TRANSLATIONS` property read and returning
 * appropriate translation based on the current locale which is store in the `usEnvDate('local')`.
 */

if (!$localizeFn.translationsByLanguage) {
	$localizeFn.translationsByLanguage = new Map([["", {}]]);
	Object.defineProperty($localize, "TRANSLATIONS", {
		get: () => {
			const locale = getLocale(DEFAULT_LOCALE);
			let translations = $localizeFn.translationsByLanguage.get(locale);
			if (!translations) {
				translations = {};
				$localizeFn.translationsByLanguage.set(locale, translations);
			}
			return translations;
		},
	});
}

/**
 * Function used to load all translations variants.
 */
export function loadAllTranslationsForAllLanguages() {
	for (const { translations, locale } of [EN, IT]) {
		withLocale(locale, () => loadTranslations(translations));
	}
}

/**
 * Function used to examine the request and determine the locale to use.
 *
 * This function is meant to be used with `RenderOptions.locale` property
 *
 * @returns The locale to use which will be stored in the `useEnvData('locale')`.
 */
export function extractLanguage(locale: string): string | null {
	return locale && $localizeFn.translationsByLanguage.has(locale)
		? locale
		: null;
}

/**
 * Function used to determine the base URL to use for loading the chunks in the browser.
 *
 * The function returns `/build` in dev mode or `/build/<locale>` in prod mode.
 *
 * This function is meant to be used with `RenderOptions.base` property
 *
 * @returns The base URL to use for loading the chunks in the browser.
 */
export function extractBase({ serverData }: RenderOptions): string {
	if (import.meta.env.DEV) {
		return `${import.meta.env.BASE_URL}build`;
	}
	return `${import.meta.env.BASE_URL}build/${serverData?.["locale"]}`;
}

export function useI18n() {
	if (import.meta.env.DEV) {
		// During development only, load all translations in memory when the app starts on the client.
		// eslint-disable-next-line
		useOnDocument("qinit", $(loadAllTranslationsForAllLanguages));
	}
}

// We always need the translations on the server
if (import.meta.env.SSR) {
	loadAllTranslationsForAllLanguages();
}
