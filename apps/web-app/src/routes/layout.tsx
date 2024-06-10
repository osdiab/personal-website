import {
	Slot,
	component$,
	useContextProvider,
	useSignal,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import {} from "@qwikest/icons/lucide";
import { safeParse } from "valibot";
import { ScrollProvider } from "~/components/scroll-detector";
import {
	type ThemeOption,
	selectedThemeCookie,
	themeOptionSchema,
} from "~/components/theme-switcher/constants";
import { ThemeContext } from "~/components/theme-switcher/context";
import { Header } from "~/routes/header";
import { pageContentCss } from "~/styles/page";
import { css } from "~gen/pandacss/css";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.dev/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	});
};

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	};
});

export const useRequestThemeLoader = routeLoader$((event): ThemeOption => {
	const parsed = safeParse(
		themeOptionSchema,
		event.cookie.get(selectedThemeCookie)?.value,
	);
	if (parsed.success) {
		return parsed.output;
	}
	return "auto";
});

export default component$(() => {
	// Load the initial theme from the request cookie, but store the current theme
	// in context so that the theme switcher can change it upon selection
	const initialTheme = useRequestThemeLoader();
	const currentTheme = useSignal<ThemeOption>(initialTheme.value);
	useContextProvider(ThemeContext, currentTheme);

	const serverTime = useServerTimeLoader();

	return (
		<div
			data-color-mode={
				currentTheme.value === "auto" ? undefined : currentTheme.value
			}
			class={css({ background: "background.page", color: "text.body" })}
		>
			<ScrollProvider>
				<main>
					<Header />
					<Slot />
					<footer
						class={css({
							paddingBlockStart: "32",
							paddingBlockEnd: "24",
							position: "relative",
							_before: {
								content: "''",
								bottom: 0,
								width: "full",
								height: "32",

								position: "absolute",
								display: "block",
								zIndex: "-1",
								opacity: "0.25",
								marginBlockStart: "auto",
								maskImage:
									"linear-gradient(0deg, rgb(0, 0, 0) 0px, rgba(0, 0, 0, 0))",
								background:
									"linear-gradient(135deg,#ff7d0055 25%,transparent 0) -19px 0/38px 38px,linear-gradient(225deg,#ff7d00 25%,transparent 0) -19px 0/38px 38px,linear-gradient(315deg,#ff7d0055 25%,transparent 0) 0 0/38px 38px,linear-gradient(45deg,#ff7d00 25%,#e5e5f7 0) 0 0/38px 38px",
							},
						})}
					>
						<div class={css(pageContentCss, { color: "text.soft" })}>
							<p>
								© Omar Diab, {new Date(serverTime.value.date).getFullYear()}
							</p>
						</div>
					</footer>
				</main>
			</ScrollProvider>
		</div>
	);
});
