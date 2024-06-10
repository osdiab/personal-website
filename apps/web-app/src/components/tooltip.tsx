import {
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
	borderRadius: "md",
});

export interface TooltipProps
	extends Omit<PropsOf<typeof Popover.Root>, "manual"> {
	/**
	 * Allows overriding the internal open state
	 */
	open?: Readonly<Signal<boolean | undefined>>;
	panelProps?: Omit<PropsOf<typeof Popover.Panel>, "class">;
	css?: CssProp;
	tooltipCss?: CssProp;
}
export const Tooltip = component$<TooltipProps>(
	({ id, css: cssProp, tooltipCss, panelProps, open, ...rest }) => {
		const generatedId = useId();
		const popoverId = id ?? generatedId;
		const anchorRef = useSignal<HTMLElement | undefined>();
		const { showPopover, hidePopover } = usePopover(popoverId);

		useTask$(({ track }) => {
			track(() => open?.value);
			if (typeof open?.value !== "boolean") {
				return;
			}
			if (open.value) {
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
				{/* can be anywhere as long as ref is set */}
				<div
					ref={anchorRef}
					class={css(cssProp)}
					onMouseEnter$={async () => {
						if (typeof open?.value === "boolean") {
							return;
						}
						await showPopover();
					}}
					onMouseLeave$={async () => {
						if (typeof open?.value === "boolean") {
							return;
						}
						await hidePopover();
					}}
				>
					<Slot name="trigger" />
				</div>
				<Popover.Panel {...panelProps}>
					<div class={css(defaultTooltipCss)}>
						<Slot name="content" />
					</div>
				</Popover.Panel>
			</Popover.Root>
		);
	},
);
