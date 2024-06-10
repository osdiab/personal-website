import {
	$,
	component$,
	useComputed$,
	useContext,
	useSignal,
} from "@builder.io/qwik";
import { Select } from "@qwik-ui/headless";
import { LuMoon, LuSun, LuSunMoon } from "@qwikest/icons/lucide";
import jsCookie from "js-cookie";
import {
	type ThemeOption,
	selectedThemeCookie,
} from "~/components/theme-switcher/constants";
import { ThemeContext } from "~/components/theme-switcher/context";
import { Tooltip } from "~/components/tooltip";
import { defaultIconCss } from "~/styles/icon";
import type { CssProp } from "~/utils/css";
import { objectKeys } from "~/utils/types";
import { css } from "~gen/pandacss/css";
import { hstack, invisible } from "~gen/pandacss/patterns";

export interface ThemeSwitcherProps {
	css?: CssProp;
}
export const ThemeSwitcher = component$<ThemeSwitcherProps>(
	({ css: cssProp }) => {
		const theme = useContext(ThemeContext);
		const handleChange = $((selected: string): void => {
			if (!selected || typeof window === "undefined") {
				return;
			}
			// update the context theme value, causing the root layout to update the
			// theme by setting an attribute at the top-level
			// See panda.config.ts for the condition details
			theme.value = selected as ThemeOption;
			jsCookie.set(selectedThemeCookie, theme.value);
		});

		const disableTooltip = useSignal(false);
		const tooltipOpen = useComputed$(() =>
			disableTooltip.value ? false : undefined,
		);
		const handleOpenChange = $((open: boolean) => {
			disableTooltip.value = open;
		});

		return (
			<Select.Root
				value={theme.value}
				onChange$={handleChange}
				onOpenChange$={handleOpenChange}
			>
				<Select.Label class={invisible()}>Theme</Select.Label>
				<Tooltip open={tooltipOpen}>
					<div q:slot="content">Select Theme</div>
					<Select.Trigger q:slot="trigger" class={css(cssProp)}>
						<ThemeIcon theme={theme.value} />
						<Select.DisplayValue class={invisible()} />
					</Select.Trigger>
				</Tooltip>
				<Select.Popover
					gutter={8}
					class={css({
						background: "background.tooltip",
						borderWidth: "1px",
						borderStyle: "solid",
						borderColor: "border.soft",
						borderRadius: "sm",
						padding: "4",
						color: "text.body",
					})}
				>
					<Select.Listbox>
						{themeOptionsOrdered.map((themeOption) => (
							<Select.Item
								key={themeOption}
								value={themeOption}
								class={css(
									hstack.raw({
										padding: "2",
										gap: "2",
										cursor: "pointer",
									}),
									{
										"&[data-highlighted]": {
											background: "background.select.highlight",
										},
									},
								)}
							>
								<ThemeIcon theme={themeOption} />
								<Select.ItemLabel
									class={css({ textStyle: "sm", fontWeight: "semibold" })}
								>
									{themeName[themeOption]}
								</Select.ItemLabel>
							</Select.Item>
						))}
					</Select.Listbox>
				</Select.Popover>
			</Select.Root>
		);
	},
);

interface ThemeIconProps {
	theme: ThemeOption;
	css?: CssProp;
}

export const ThemeIcon = component$<ThemeIconProps>(
	({ theme, css: cssProp }) => {
		const className = css(defaultIconCss, cssProp);
		switch (theme) {
			case "light":
				return <LuSun class={className} />;
			case "dark":
				return <LuMoon class={className} />;
			case "auto":
				return <LuSunMoon class={className} />;
		}
	},
);

const themeName: Record<ThemeOption, string> = {
	auto: "Auto",
	light: "Light",
	dark: "Dark",
};

const themeOptionOrderMap: Record<ThemeOption, number> = {
	light: 0,
	dark: 1,
	auto: 2,
};
export const themeOptionsOrdered = objectKeys(themeOptionOrderMap).sort(
	(a, b) => themeOptionOrderMap[a] - themeOptionOrderMap[b],
);
