import {
	type PropsOf,
	Slot,
	component$,
	useId,
	useSignal,
} from "@builder.io/qwik";
import { Popover, PopoverTrigger } from "@qwik-ui/headless";
import { tooltipCss } from "~/components/tooltip";
import type { AddCssProp } from "~/utils/css";
import { css } from "~gen/pandacss/css";

/**
 * Two slots:
 * - trigger: The element that will trigger the tooltip to show
 * - content: The content of the tooltip
 */
export const Tooltip = component$<
	AddCssProp<
		{ popoverProps?: AddCssProp<PropsOf<typeof Popover>> } & Omit<
			PropsOf<typeof PopoverTrigger>,
			"popovertarget"
		>
	>
>(({ popoverProps, css: cssProp, ...rest }) => {
	const id = `popover-${useId()}`;
	const anchorRef = useSignal<HTMLElement>();
	const anchorRefProp = popoverProps?.anchorRef;
	return (
		<>
			<PopoverTrigger
				popovertarget={id}
				ref={anchorRef}
				{...rest}
				class={css(cssProp)}
			>
				<Slot name="trigger" />
			</PopoverTrigger>
			<Popover
				id={id}
				floating
				gutter={8}
				{...popoverProps}
				anchorRef={anchorRefProp || anchorRef}
			>
				<div class={css(tooltipCss, popoverProps?.css)}>
					<Slot name="content" />
				</div>
			</Popover>
		</>
	);
});
