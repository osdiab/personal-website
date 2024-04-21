import { Slot, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { LuGithub, LuLinkedin, LuMail } from "@qwikest/icons/lucide";
import { Logo } from "~/components/logo";
import { defaultIconCss } from "~/styles/icon";
import { hyperlinkCss } from "~/styles/link";
import { pageContentCss } from "~/styles/page";
import { css } from "~gen/pandacss/css";
import { hstack } from "~gen/pandacss/patterns";

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

const linkIconCss = css(hyperlinkCss, {
	textDecoration: "none",
	color: "text.body",
});

export default component$(() => {
	return (
		<>
			<main>
				<header class={css({ paddingY: "2" })}>
					<div
						class={css(
							pageContentCss,
							hstack.raw({ gap: "8", justifyContent: "space-between" }),
						)}
					>
						<a href="/">
							<section class={hstack({ gap: "3", textStyle: "lg" })}>
								<Logo class={css({ height: "1.5em", width: "auto" })} />
								<strong>Omar Diab</strong>
							</section>
						</a>
						<section class={hstack({ gap: "4", textStyle: "lg" })}>
							<a class={linkIconCss} href="mailto:hello@omardiab.com">
								<LuMail class={css(defaultIconCss)} />
							</a>
							<a
								class={linkIconCss}
								href="https://github.com/osdiab"
								target="_blank"
								rel="noreferrer"
							>
								<LuGithub class={css(defaultIconCss)} />
							</a>
							<a
								class={linkIconCss}
								href="https://linkedin.com/in/osdiab"
								target="_blank"
								rel="noreferrer"
							>
								<LuLinkedin class={css(defaultIconCss)} />
							</a>
						</section>
					</div>
				</header>
				<Slot />
			</main>
		</>
	);
});
