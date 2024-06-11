import { component$ } from "@builder.io/qwik";
import { type LogoProps, defaultLogoCss } from "~/components/logos/logo";
import { css } from "~gen/pandacss/css";

export const SiteLogo = component$<LogoProps>(({ css: cssProp, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 400 400"
		fill="none"
		class={css(defaultLogoCss, cssProp)}
		{...props}
	>
		<title>Logo</title>
		<g clip-path="url(#a)">
			<path
				fill="url(#b)"
				fill-rule="evenodd"
				d="M200 400q-3.222 0-6.443-.102l-.227-.007q-1.49-.049-2.974-.12l-.339-.016q-6.35-.312-12.668-1.024l-.348-.04q-1.003-.114-2.003-.239C76.34 386.148 0 301.99 0 200S76.34 13.852 174.996 1.548h.002a200 200 0 0 1 15.02-1.303l.338-.017q1.484-.07 2.974-.119l.227-.007a203 203 0 0 1 3.125-.075h.048q.788-.015 1.578-.02L200 0c5.378 0 10.755.214 16.116.64a201 201 0 0 1 6.553.63l.32.037q1.007.115 2.013.24C323.66 13.853 400 98.012 400 200s-76.34 186.148-174.995 198.452h-.003q-1.005.126-2.014.241l-.319.036c-5.317.601-10.655.988-16.003 1.162l-.218.007q-1.563.05-3.13.075h-.045q-1.633.028-3.273.027M203.27.026A209 209 0 0 0 200 0zm21.73 347.9C295.944 336.024 350 274.325 350 200S295.944 63.977 225.002 52.074zM200 400l-3.273-.026q1.633.025 3.273.026"
				clip-rule="evenodd"
			/>
		</g>
		<defs>
			<radialGradient
				id="b"
				cx="0"
				cy="0"
				r="1"
				gradientTransform="rotate(180 -9800 200)scale(32624.4)"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#F6490D" />
				<stop offset="1" stop-color="#FF7D50" />
			</radialGradient>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h400v400H0z" />
			</clipPath>
		</defs>
	</svg>
));
