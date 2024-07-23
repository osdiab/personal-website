import { Slot, component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { extractLanguage, useI18n } from "~/routes/[locale]/i18n-utils";

export const onRequest: RequestHandler = ({ locale, params, error }) => {
	const localeParam = params["locale"];
	const language = localeParam ? extractLanguage(localeParam) : null;
	if (!language) {
		throw error(404, "Not Found");
	}
	locale(language);
};

export default component$(() => {
	useI18n();
	return <Slot />;
});
