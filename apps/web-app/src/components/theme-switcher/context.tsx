import { type Signal, createContextId } from "@builder.io/qwik";
import type { ThemeOption } from "~/components/theme-switcher/constants";

export const ThemeContext = createContextId<Signal<ThemeOption>>("theme");
