import {
	type PropsOf,
	component$,
	useComputed$,
	useContext,
} from "@builder.io/qwik";
import { Tooltip } from "@qwik-ui/headless";
import { LuGithub, LuLinkedin, LuMail } from "@qwikest/icons/lucide";
import { SiteLogo } from "~/components/logos/site";
import { pageScrolledYContext } from "~/components/scroll-detector";
import { defaultTooltipProps } from "~/components/tooltip";
import { defaultIconCss } from "~/styles/icon";
import { pageContentCss } from "~/styles/page";
import { hyperlinkBaseCss, interactiveTransitionCss } from "~/styles/prose";
import { css } from "~gen/pandacss/css";
import { hstack } from "~gen/pandacss/patterns";

export const Header = component$(() => {
	const scrolledY = useContext(pageScrolledYContext);
	return (
		<header
			class={useComputed$(() =>
				css(
					{
						paddingY: "2",
						position: "sticky",
						insetBlockStart: "0",
						background: "background.page",
					},
					scrolledY.value && {
						borderBlockEnd: "1px solid token(colors.border.soft)",
					},
				),
			)}
		>
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
					<Tooltip {...tooltipProps} content="Email Me">
						<a class={linkIconCss} href="mailto:hello@omardiab.com">
							<LuMail class={css(defaultIconCss)} />
						</a>
					</Tooltip>
					<Tooltip {...tooltipProps} content="Github">
						<a
							class={linkIconCss}
							href="https://github.com/osdiab"
							target="_blank"
							rel="noreferrer"
						>
							<LuGithub class={css(defaultIconCss)} />
						</a>
					</Tooltip>
					<Tooltip {...tooltipProps} content="LinkedIn">
						<a
							class={linkIconCss}
							href="https://linkedin.com/in/osdiab"
							target="_blank"
							rel="noreferrer"
						>
							<LuLinkedin class={css(defaultIconCss)} />
						</a>
					</Tooltip>
				</section>
			</div>
		</header>
	);
});

const linkIconCss = css(hyperlinkBaseCss, interactiveTransitionCss, {
	display: "block",
	textDecoration: "none",
	transitionProperty: "color",
	color: "text.body",
	_hover: { color: "text.primary" },
});

const tooltipProps: Omit<PropsOf<typeof Tooltip>, "content"> = {
	...defaultTooltipProps,
	position: "bottom",
};
