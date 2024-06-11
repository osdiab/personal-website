import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { isNotNil } from "ramda";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
	const head = useDocumentHead();
	const loc = useLocation();

	return (
		<>
			<title>{head.title}</title>

			<link rel="canonical" href={loc.url.href} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

			{head.meta.map((m) => (
				<meta key={m.key} {...m} />
			))}

			{head.links.map((l) => (
				<link key={l.key} {...l} />
			))}

			{head.styles.map((s) => (
				<style
					key={s.key}
					{...s.props}
					// biome-ignore lint/security/noDangerouslySetInnerHtml: needed for setting up styles
					dangerouslySetInnerHTML={[s.props?.dangerouslySetInnerHTML, s.style]
						.filter(isNotNil)
						.join("")}
				/>
			))}

			{head.scripts.map((s) => (
				<script
					key={s.key}
					{...s.props}
					// biome-ignore lint/security/noDangerouslySetInnerHtml: needed for setting up styles
					dangerouslySetInnerHTML={[s.props?.dangerouslySetInnerHTML, s.script]
						.filter(isNotNil)
						.join("")}
				/>
			))}
		</>
	);
});
