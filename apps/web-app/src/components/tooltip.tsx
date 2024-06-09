import {
	type PropsOf,
	Slot,
	component$,
	useId,
	useSignal,
} from "@builder.io/qwik";
import { Popover, usePopover } from "@qwik-ui/headless";
import type { CssProp } from "~/utils/css";
import { css } from "~gen/pandacss/css";

export const defaultTooltipCss = css.raw({
	textStyle: "p",
	borderWidth: "1px",
	borderStyle: "solid",
	borderColor: "border.soft",
	background: "background.page",
	paddingX: "2",
	paddingY: "1",
	borderRadius: "md",
});

export interface TooltipProps
	extends Omit<PropsOf<typeof Popover.Root>, "manual"> {
	panelProps?: Omit<PropsOf<typeof Popover.Panel>, "class">;
	css?: CssProp;
	tooltipCss?: CssProp;
}
export const Tooltip = component$<TooltipProps>(
	({ id, css: cssProp, tooltipCss, panelProps, ...rest }) => {
		const generatedId = useId();
		const popoverId = id ?? generatedId;
		const anchorRef = useSignal<HTMLElement | undefined>();
		const { showPopover, hidePopover } = usePopover(popoverId);

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
						await showPopover();
					}}
					onMouseLeave$={async () => {
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
