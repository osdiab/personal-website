import { Slot, component$, useSignal, useTask$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import {} from "@qwikest/icons/lucide";
import { fromZonedTime } from "date-fns-tz";
import { ScrollProvider } from "~/components/scroll-detector";
import {} from "~/components/theme-switcher/constants";
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

export default component$(() => {
	const date = useSignal<Date>();
	useTask$(() => {
		date.value = fromZonedTime(
			new Date(),
			Intl.DateTimeFormat().resolvedOptions().timeZone,
		);
	});

	return (
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
						<p>© Omar Diab{date.value ? ", date.value.getFullYear()" : ""}</p>
					</div>
				</footer>
			</main>
		</ScrollProvider>
	);
});
