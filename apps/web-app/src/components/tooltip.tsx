import {
	$,
	type PropsOf,
	type Signal,
	Slot,
	component$,
	useId,
	useSignal,
	useTask$,
} from "@builder.io/qwik";
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
		const generatedId = useId();
		const popoverId = id ?? generatedId;
		const anchorRef = useSignal<HTMLElement | undefined>();
		const { showPopover, hidePopover } = usePopover(popoverId);

		const focused = useSignal(false);
		const hovered = useSignal(false);

		const onHover = $(() => {
			hovered.value = true;
		});
		const onHoverOut = $(() => {
			hovered.value = false;
		});
		const onFocus = $(() => {
			focused.value = true;
		});
		const onBlur = $(() => {
			focused.value = false;
		});

		useTask$(({ track }) => {
			track(focused);
			track(hovered);
			track(() => open?.value);

			if (typeof open?.value === "boolean") {
				if (open.value) {
					showPopover();
				} else {
					hidePopover();
				}
			} else if (focused.value || hovered.value) {
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
				onFocusIn$={onFocus}
				onFocusOut$={onBlur}
				onMouseOver$={onHover}
				onMouseOut$={onHoverOut}
			>
				<div ref={anchorRef} class={css(cssProp)}>
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
