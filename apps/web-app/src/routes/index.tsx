import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BreezeLogo } from "~/components/logos/breeze";
import { CleverLogo } from "~/components/logos/clever";
import { EveryDotOrgLogo } from "~/components/logos/everydotorg";
import { SpinachLogo } from "~/components/logos/spinach";
import { pageContentCss } from "~/styles/page";
import { proseCss } from "~/styles/prose";
import { css } from "~gen/pandacss/css";
import { hstack } from "~gen/pandacss/patterns";
import { vstack } from "~gen/pandacss/patterns/vstack";

export default component$(() => {
	return (
		<section
			class={css(
				pageContentCss,
				vstack.raw({ gap: "8", alignItems: "stretch" }),
			)}
		>
			<section class={css({ paddingY: { lg: "8", lgDown: "4" } })}>
				<h1 class={css({ textStyle: "4xl" })}>
					I leverage technology to build sustainable businesses that change
					industries.
				</h1>
			</section>
			<section
				class={vstack({ gap: "24", alignItems: "stretch", maxWidth: "600px" })}
			>
				<JobDescription
					jobTitle="Cofounder, CTO"
					timePeriod="2023-Present"
					jobHref="https://breezehr.com"
				>
					<div q:slot="body">
						<p>
							A global payroll platform to systematize the payroll process from
							A-Z, across countries, without compromise. Designed with local
							payroll vendors in mind, to level the playing field with large
							global firms.
						</p>
					</div>
					<BreezeLogo q:slot="logo" />
				</JobDescription>
				<JobDescription
					jobTitle="Cofounder, Head of Engineering"
					timePeriod="Since Born"
					jobHref="https://gotofu.com"
				>
					<div q:slot="body">
						<p>
							A whitelabel platform that powers the operations of major Employer
							of Record global payroll companies, from sales pipeline to payroll
							to invoicing. I designed the initial product concept, and built a
							team that implemented and successfully deployed it at scale at
							multiple companies. Acquired 2023.
						</p>
					</div>
					<SpinachLogo q:slot="logo" />
				</JobDescription>
				<JobDescription
					jobTitle="Cofounder, Head of Engineering"
					timePeriod="2018-2021"
					jobHref="https://every.org"
				>
					<div q:slot="body">
						<p>
							The easiest and most efficient way to donate to any U.S.
							nonprofit. I helped research issues in philanthropy, and built the
							core of the app. By the time I departed, it was facilitating tens
							of millions of dollars in donations yearly. Still running!
						</p>
					</div>
					<EveryDotOrgLogo q:slot="logo" />
				</JobDescription>
				<JobDescription
					jobTitle="Full Stack Engineer"
					timePeriod="2014-2017"
					jobHref="https://clever.com"
				>
					<p q:slot="body">
						Single sign-on and simple APIs to query dived student databases. I{" "}
						<a
							href="https://www.clever.com/products/badges"
							target="_blank"
							rel="noreferrer"
						>
							implemented Clever Badges
						</a>
						, allowing young children to access education tech at school.
						Majority U.S. public school market share and powers millions of
						student logins daily. Acquired 2021.
					</p>
					<CleverLogo q:slot="logo" />
				</JobDescription>
			</section>
		</section>
	);
});

const JobDescription = component$(
	({
		jobTitle,
		timePeriod,
		jobHref,
	}: { jobTitle: string; timePeriod: string; jobHref: string }) => {
		return (
			<article
				class={css(
					{ width: "full" },
					vstack.raw({ gap: "8", alignItems: "stretch" }),
				)}
			>
				<header class={hstack({ gap: "4" })}>
					<a
						href={jobHref}
						target="_blank"
						rel="noreferrer"
						class={css({ flexGrow: "1" })}
					>
						<div
							class={css({
								height: "token(fontSizes.4xl)",
								"& svg": { height: "full", width: "auto", maxWidth: "full" },
							})}
						>
							<Slot name="logo" />
						</div>
					</a>
					<div
						class={css(
							{ whiteSpace: "nowrap", marginInlineStart: "auto" },
							vstack.raw({ gap: "2", alignItems: "end" }),
						)}
					>
						<span class={css({ fontWeight: "bold" })}>{jobTitle}</span>
						<span class={css({ fontStyle: "italic" })}>{timePeriod}</span>
					</div>
				</header>
				<main class={css(proseCss)}>
					<Slot name="body" />
				</main>
			</article>
		);
	},
);

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
