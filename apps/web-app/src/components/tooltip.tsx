import {
	type PropsOf,
	type Signal,
	Slot,
	component$,
	useId,
	useSignal,
	useTask$,
} from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import { Popover, usePopover } from "@qwik-ui/headless";
import type { CssProp } from "~/utils/css";
import { css } from "~gen/pandacss/css";

export const defaultTooltipCss = css.raw({
	textStyle: "p",
	borderWidth: "1px",
	borderStyle: "solid",
	borderColor: "border.soft",
	color: "text.body",
	background: "background.tooltip",
	paddingX: "2",
	paddingY: "1",
	borderRadius: "sm",
});

export interface TooltipProps
	extends Omit<PropsOf<typeof Popover.Root>, "manual"> {
	/**
	 * Allows overriding the internal open state
	 */
	open?: Readonly<Signal<boolean | undefined>>;
	panelProps?: Omit<PropsOf<typeof Popover.Panel>, "class"> & { css?: CssProp };
	css?: CssProp;
	tooltipCss?: CssProp;
}
export const Tooltip = component$<TooltipProps>(
	({
		id,
		css: cssProp,
		tooltipCss,
		panelProps: { css: panelCss, ...panelProps } = {},
		open,
		...rest
	}) => {
		const anchorRef = useSignal<HTMLElement | undefined>();
		const focused = useSignal(false);
		const hovered = useSignal(false);

		const generatedId = useId();
		const popoverId = id ?? generatedId;
		const { showPopover, hidePopover } = usePopover(popoverId);

		useTask$(({ track }) => {
			track(() => focused.value);
			track(() => hovered.value);
			track(() => open?.value);

			if (isServer) {
				return;
			}
			const shouldShowPopover = open?.value ?? (focused.value || hovered.value);
			if (shouldShowPopover) {
				showPopover();
			} else {
				hidePopover();
			}
		});

		return (
			<Popover.Root
				gutter={8}
				{...rest}
				id={popoverId}
				bind:anchor={anchorRef}
				manual
			>
				<div
					ref={anchorRef}
					class={css(cssProp)}
					onFocusIn$={() => {
						focused.value = true;
					}}
					onFocusOut$={() => {
						focused.value = false;
					}}
					onMouseOver$={() => {
						hovered.value = true;
					}}
					onMouseOut$={() => {
						hovered.value = false;
					}}
				>
					<Slot name="trigger" />
				</div>
				<Popover.Panel
					{...panelProps}
					class={css({ background: "transparent" }, panelCss)}
				>
					<div class={css(defaultTooltipCss)}>
						<Slot name="content" />
					</div>
				</Popover.Panel>
			</Popover.Root>
		);
	},
);
