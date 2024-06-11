import { type InferOutput, picklist } from "valibot";

export const selectedThemeCookie = "osdiab-theme";
export const themeOptionSchema = picklist(["light", "dark", "auto"]);
export type ThemeOption = InferOutput<typeof themeOptionSchema>;
export const rootThemeAttribute = "data-theme";
