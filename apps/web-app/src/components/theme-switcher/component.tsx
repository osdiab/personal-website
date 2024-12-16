import { $, component$, useSignal } from "@builder.io/qwik";
import { Select } from "@qwik-ui/headless";
import { LuMoon, LuSun, LuSunMoon } from "@qwikest/icons/lucide";
import {
	type ThemeOption,
	colorSchemeAttribute,
	rootThemeAttribute,
	selectedThemeCookie,
} from "~/components/theme-switcher/constants";
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
		const handleChange = $((selected: string): void => {
			if (!selected || typeof window === "undefined") {
				return;
			}
			localStorage.setItem(selectedThemeCookie, selected);
			document.body.setAttribute(rootThemeAttribute, selected);

			if (selected === "auto") {
				document.body.setAttribute(
					colorSchemeAttribute,
					window.matchMedia("(prefers-color-scheme: dark)").matches
						? "dark"
						: "light",
				);
			} else {
				document.body.setAttribute(colorSchemeAttribute, selected);
			}
		});

		const disableTooltip = useSignal(false);
		const handleOpenChange = $((open: boolean) => {
			disableTooltip.value = open;
		});

		return (
			<Select.Root onChange$={handleChange} onOpenChange$={handleOpenChange}>
				<Select.Label class={invisible()}>Theme</Select.Label>
				<Select.Trigger class={css(cssProp)}>
					<CurrentThemeIcon />
					<Select.DisplayValue class={invisible()} />
				</Select.Trigger>
				<Select.Popover gutter={8} class={css({ background: "transparent" })}>
					<Select.Listbox
						class={css({
							background: "background.tooltip",
							border: "1px solid token(colors.border.soft)",
							borderRadius: "sm",
							color: "text.body",
						})}
					>
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

const CurrentThemeIcon = component$(() => {
	return (
		<>
			<ThemeIcon
				css={css.raw({
					display: "none",
					_autoThemeEnabled: { display: "block" },
				})}
				theme={"auto"}
			/>
			<ThemeIcon
				css={css.raw({
					display: "none",
					_lightThemeEnabled: { display: "block" },
				})}
				theme={"light"}
			/>
			<ThemeIcon
				css={css.raw({
					display: "none",
					_darkThemeEnabled: { display: "block" },
				})}
				theme={"dark"}
			/>
		</>
	);
});
