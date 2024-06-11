import {
	type Signal,
	Slot,
	component$,
	createContextId,
	useContextProvider,
	useSignal,
	useVisibleTask$,
} from "@builder.io/qwik";
import { css } from "~gen/pandacss/css";

// biome-ignore lint/style/useNamingConvention: false positive, X is a single letter
export const pageScrolledXContext =
	createContextId<Signal<boolean>>("scrolledX");
// biome-ignore lint/style/useNamingConvention: same as above
export const pageScrolledToEndXContext =
	createContextId<Signal<boolean>>("scrolledToEndX");
// biome-ignore lint/style/useNamingConvention: same as above
export const pageScrolledYContext =
	createContextId<Signal<boolean>>("scrolledY");

export const ScrollProvider = component$(() => {
	const scrolledX = useSignal<boolean>(false);
	const scrolledToEndX = useSignal<boolean>(false);
	const scrolledY = useSignal<boolean>(false);

	const xStartRef = useSignal<Element>();
	const xEndRef = useSignal<Element>();
	const yRef = useSignal<Element>();

	useContextProvider(pageScrolledXContext, scrolledX);
	useContextProvider(pageScrolledToEndXContext, scrolledToEndX);
	useContextProvider(pageScrolledYContext, scrolledY);

	// needed in this case for to properly determine scroll position
	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(
		({ track, cleanup }) => {
			track(() => xStartRef.value);

			const element = xStartRef.value;
			if (!element) {
				return;
			}
			const observer = new IntersectionObserver(
				([entry]) => {
					const isVisible = !!entry?.isIntersecting;
					scrolledX.value = !isVisible;
				},
				{ threshold: [1] },
			);
			cleanup(() => {
				observer.unobserve(element);
			});
		},
		{ strategy: "document-ready" },
	);

	// needed in this case for to properly determine scroll position
	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(
		({ track, cleanup }) => {
			track(() => yRef.value);

			const element = yRef.value;
			if (!element) {
				return;
			}
			const observer = new IntersectionObserver(
				([entry]) => {
					const isVisible = !!entry?.isIntersecting;
					scrolledY.value = !isVisible;
				},
				{ threshold: [1] },
			);

			observer.observe(element);
			cleanup(() => {
				observer.unobserve(element);
			});
		},
		{ strategy: "document-ready" },
	);

	// needed in this case for to properly determine scroll position
	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(
		({ track, cleanup }) => {
			track(() => xEndRef.value);

			const element = xEndRef.value;
			if (!element) {
				return;
			}
			const observer = new IntersectionObserver(
				([entry]) => {
					const isVisible = !!entry?.isIntersecting;
					scrolledToEndX.value = isVisible;
				},
				{ threshold: [1] },
			);
			cleanup(() => {
				observer.unobserve(element);
			});
		},
		{ strategy: "document-ready" },
	);

	return (
		<>
			<div class={css({ width: "full", position: "relative" })}>
				<span
					class={css({ position: "absolute", top: 0, width: "100%" })}
					ref={yRef}
				/>
				<span
					class={css({ position: "absolute", left: 0, height: "100%" })}
					ref={xStartRef}
				/>
				<span
					class={css({ position: "absolute", right: 0, height: "100%" })}
					ref={xEndRef}
				/>
			</div>
			<Slot />
		</>
	);
});
