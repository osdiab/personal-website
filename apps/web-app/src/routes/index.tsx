import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuLink } from "@qwikest/icons/lucide";
import { BreezeLogo } from "~/components/logos/breeze";
import { CleverLogo } from "~/components/logos/clever";
import { EveryDotOrgLogo } from "~/components/logos/everydotorg";
import { SpinachLogo } from "~/components/logos/spinach";
import { defaultIconCss } from "~/styles/icon";
import { pageContentCss } from "~/styles/page";
import { interactiveTransitionCss, proseCss } from "~/styles/prose";
import { css } from "~gen/pandacss/css";
import { hstack, invisible } from "~gen/pandacss/patterns";
import { vstack } from "~gen/pandacss/patterns/vstack";

export default component$(() => {
	return (
		<section
			class={css(
				pageContentCss,
				vstack.raw({ gap: "8", alignItems: "stretch" }),
			)}
		>
			<h1 class={invisible()}>Home</h1>
			<section class={css({ paddingBlockStart: "16", paddingBlockEnd: "12" })}>
				<h2 class={css({ textStyle: "4xl" })}>
					I leverage technology to build sustainable businesses that change
					industries.
				</h2>
			</section>
			<section
				class={vstack({ gap: "24", alignItems: "stretch", maxWidth: "600px" })}
			>
				<JobDescription
					projectName="Breeze"
					jobTitle="Cofounder, CTO"
					timePeriod="2023-Present"
					jobHref="https://breezehr.com"
				>
					<div q:slot="body">
						<p>
							A global payroll platform that systematizes the payroll process
							across countries and vendors, from A-Z. I'm designing the product
							and building the engineering team from scratch; facilitating
							client leads; and managing our compliance, pentests and audits for
							ISO 27001, GDPR and beyond.
						</p>
					</div>
					<BreezeLogo q:slot="logo" />
				</JobDescription>
				<JobDescription
					projectName="Spinach"
					jobTitle="Cofounder, Head of Engineering"
					timePeriod="2021-2023"
					jobHref="https://gotofu.com"
				>
					<div q:slot="body">
						<p>
							A whitelabel platform that powers the operations of major global
							Employer of Record companies, from sales pipeline to payroll to
							invoicing. I designed the initial product concept, and built a
							team that implemented and successfully deployed it at scale at
							multiple companies. Acquired 2023.
						</p>
					</div>
					<SpinachLogo q:slot="logo" />
				</JobDescription>
				<JobDescription
					projectName="Every.org"
					jobTitle="Cofounder, Head of Engineering"
					timePeriod="2018-2021"
					jobHref="https://every.org"
				>
					<div q:slot="body">
						<p>
							The easiest and most efficient way to donate to any U.S.
							nonprofit. I researched opportunities to improve philanthropy and
							built the core of the app. By the time I departed, it enabled tens
							of millions of dollars in donations yearly, and continues to grow.
						</p>
					</div>
					<EveryDotOrgLogo q:slot="logo" />
				</JobDescription>
				<JobDescription
					projectName="Clever"
					jobTitle="Full Stack Engineer"
					timePeriod="2014-2017"
					jobHref="https://clever.com"
				>
					<p q:slot="body">
						Single sign-on and simple APIs to query data across fragmented
						student databases in the USA. I{" "}
						<a
							href="https://www.clever.com/products/badges"
							target="_blank"
							rel="noreferrer"
						>
							implemented Clever Badges
						</a>
						, enabling young children to access education tech at school. We won
						the majority of the U.S. public school market, and Clever continues
						to power millions of student logins daily.{" "}
						<a
							href="https://www.edsurge.com/news/2021-05-06-kahoot-acquires-clever-for-500m-hoping-to-expand-its-presence-in-the-u-s"
							target="_blank"
							rel="noreferrer"
						>
							Acquired 2021.
						</a>
					</p>
					<CleverLogo q:slot="logo" />
				</JobDescription>
			</section>
		</section>
	);
});

interface JobDescriptionProps {
	projectName: string;
	jobTitle: string;
	timePeriod: string;
	jobHref: string;
}

const JobDescription = component$<JobDescriptionProps>(
	({ projectName, jobTitle, timePeriod, jobHref }) => {
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
						class={css(
							interactiveTransitionCss,
							{
								transitionProperty: "color",
								flexGrow: "1",
								_hover: { color: "text.primary" },
							},
							hstack.raw({ gap: "2" }),
						)}
					>
						<h3 class={invisible()}>{projectName}</h3>
						<div
							class={css({
								height: "token(fontSizes.4xl)",
								"& svg": { height: "full", width: "auto", maxWidth: "full" },
							})}
						>
							<Slot name="logo" />
						</div>
						<LuLink class={css(defaultIconCss)} />
					</a>
					<aside
						class={css(
							{ whiteSpace: "nowrap", marginInlineStart: "auto" },
							vstack.raw({ gap: "2", alignItems: "end" }),
						)}
					>
						<span class={css({ fontWeight: "bold" })}>{jobTitle}</span>
						<span class={css({ fontStyle: "italic" })}>{timePeriod}</span>
					</aside>
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
