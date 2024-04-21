import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { vstack } from "~gen/pandacss/patterns/vstack";

export default component$(() => {
	return (
		<section class={vstack({ gap: "4", color: "red" })}>
			<h1>Hi there</h1>
			<p>Sup friends</p>
		</section>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
