import { component$, useComputed$, useContext } from "@builder.io/qwik";
import { LuGithub, LuLinkedin, LuMail } from "@qwikest/icons/lucide";
import { SiteLogo } from "~/components/logos/site";
import { pageScrolledYContext } from "~/components/scroll-detector";
import { ThemeSwitcher } from "~/components/theme-switcher/component";
import { Tooltip } from "~/components/tooltip";
import { defaultIconCss } from "~/styles/icon";
import { pageContentCss } from "~/styles/page";
import { hyperlinkBaseCss, interactiveTransitionCss } from "~/styles/prose";
import { css } from "~gen/pandacss/css";
import { hstack, themeTransition } from "~gen/pandacss/patterns";

export const Header = component$(() => {
	const scrolledY = useContext(pageScrolledYContext);
	const headerClass = useComputed$(() =>
		css(
			{
				paddingY: "2",
				position: "sticky",
				insetBlockStart: "0",
				background: "background.page",
			},
			themeTransition.raw(),
			scrolledY.value && {
				borderBlockEnd: "1px solid token(colors.border.soft)",
			},
		),
	);
	return (
		<header class={headerClass}>
			<div
				class={css(
					pageContentCss,
					hstack.raw({ gap: "8", justifyContent: "space-between" }),
				)}
			>
				<a href="/">
					<section class={hstack({ gap: "3", textStyle: "lg" })}>
						<SiteLogo css={css.raw({ height: "1.5em", width: "auto" })} />
						<strong>Omar Diab</strong>
					</section>
				</a>
				<section class={hstack({ gap: "4", textStyle: "lg" })}>
					<ThemeSwitcher css={css.raw(linkIconCss, { cursor: "pointer" })} />
					<Tooltip>
						<a
							q:slot="trigger"
							class={css(linkIconCss)}
							href="mailto:hello@omardiab.com"
						>
							<LuMail class={css(defaultIconCss)} />
						</a>
						<span q:slot="content">Email Me</span>
					</Tooltip>
					<Tooltip>
						<a
							q:slot="trigger"
							class={css(linkIconCss)}
							href="https://github.com/osdiab"
							target="_blank"
							rel="noreferrer"
						>
							<LuGithub class={css(defaultIconCss)} />
						</a>
						<span q:slot="content">Github</span>
					</Tooltip>
					<Tooltip>
						<a
							q:slot="trigger"
							class={css(linkIconCss)}
							href="https://linkedin.com/in/osdiab"
							target="_blank"
							rel="noreferrer"
						>
							<LuLinkedin class={css(defaultIconCss)} />
						</a>
						<span q:slot="content">LinkedIn</span>
					</Tooltip>
				</section>
			</div>
		</header>
	);
});

const linkIconCss = css.raw(hyperlinkBaseCss, interactiveTransitionCss, {
	display: "block",
	textDecoration: "none",
	transitionProperty: "color",
	color: "text.body",
	_hover: { color: "text.primary" },
});
